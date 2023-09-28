import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {start, stop, isSensorAvailable,onSensorChanged, removeSensorListener} from 'react-native-all-sensors'
const App = () => {
  const [but,setBut]=useState(false);
  const [proximity, setProximity] = useState(0)
  const [light, setLight] = useState(0)
  const [ambi, setAmbi] = useState(0)
  const [ori,setOri]=useState(0)
  const [temp,settemp]=useState(0)
  const [press,setPress]=useState(0)
  const [linx,setLinx]=useState({x:0,y:0,z:0})
  const [accelerometer, setAccelerometer] = useState({x:0,y:0,z:0})
  const [magno, setmagno] = useState({x:0,y:0,z:0})
  const [grav,setGrav]=useState({z:0,y:0,x:0})
  const [gyro,setGyro]=useState({z:0,y:0,x:0})
  useEffect(() => {
    isSensorAvailable('proximity').then((available) => {
      if (available) {
        start('proximity').then(() => {
          console.log('Proximity sensor started')
          onSensorChanged('ProximityData', (data) => {
            setProximity(data)
          })
        }
        )
      }
      else{
        console.log("no proximity:<")
      }
    })
    isSensorAvailable('accelerometer').then((available) => {
      if (available) {
        start('accelerometer').then(() => {
          console.log('Accelerometer sensor started')
          onSensorChanged('AccelerometerData', (data) => {
            setAccelerometer(data)
          })
        }
        )
      }
      else{
        console.log("no accel:<")
      }
    })

    isSensorAvailable('light').then((available) => {
      if (available) {
        start('light').then(() => {
          console.log('Light sensor started')
          onSensorChanged('LightData', (data) => {
            setLight(data)
          })
        }
        )
      }
      else{
        console.log("no light:<")
      }
    })

    isSensorAvailable('ambientTemperature').then((available) => {
      if (available) {
        start('ambientTemperature').then(() => {
          console.log('ambientTemperature sensor started')
          onSensorChanged('AmbientTemperatureData', (data) => {
            setAmbi(data)
          })
        }
        )
      }
      else{
        console.log("no ambient temp:<")
      }
    })
    isSensorAvailable('orientation').then((available) => {
      if (available) {
        start('orientation').then(() => {
          console.log('orientation sensor started')
          onSensorChanged('OrientationData', (data) => {
            setOri(data)
          })
        }
        )
      }
      else{
        console.log("no orientation:<")
      }
    })

    isSensorAvailable('temperature').then((available) => {
      if (available) {
        start('temperature').then(() => {
          console.log('temperature sensor started')
          onSensorChanged('TemperatureData', (data) => {
            settemp(data)
          })
        }
        )
      }
      else{
        console.log("no temp:<")
      }
    })

    isSensorAvailable('magneticField').then((available) => {
      if (available) {
        start('magneticField').then(() => {
          console.log('magneticField sensor started')
          onSensorChanged('MagneticFieldData', (data) => {
            setmagno(data)
          })
        }
        )
      }
      else{
        console.log("no magneticfield:<")
      }

      
    })

    isSensorAvailable('linearAcceleration').then((available) => {
      if (available) {
        start('linearAcceleration').then(() => {
          console.log('linearAcceleration sensor started')
          onSensorChanged('LinearAccelerationData', (data) => {
            setLinx(data)
          })
        }
        )
      }
      else{
        console.log("no linearAcceleration:<")
      }

      
    })

    isSensorAvailable('gravity').then((available) => {
      if (available) {
        start('gravity').then(() => {
          console.log('gravity sensor started')
          onSensorChanged('GravityData', (data) => {
            setGrav(data)
          })
        }
        )
      }
      else{
        console.log("no Gravity:<")
      }

      
    })

    isSensorAvailable('pressure').then((available) => {
      if (available) {
        start('pressure').then(() => {
          console.log('pressure sensor started')
          onSensorChanged('PressureData', (data) => {
            setPress(data)
          })
        }
        )
      }
      else{
        console.log("no Pressure:<")
      }

      
    })

    return () => {
      
      stop('proximity')
      stop('accelerometer')
      stop('light')
      stop('ambientTemperature')
      stop('orientation')
      stop('temperature')
      stop('magneticField')
      stop('linearAcceleration')
      stop('gravity')
      stop('pressure')
    }
  }
  , [but])

  const rem=()=>{
      removeSensorListener('AccelerometerData')
      removeSensorListener('LightData')
      removeSensorListener('AmbientTemperatureData')
      removeSensorListener('TemperatureData')
      removeSensorListener('OrientationData')
      removeSensorListener('ProximityData')
      removeSensorListener('MagneticFieldData')
      removeSensorListener('LinearAccelerationData')
      removeSensorListener('GravityData')
      removeSensorListener('PressureData')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.head}>ALL SENNSORS RISHAV DADA JINDABAD !</Text>
      <Text>Proximity: {proximity}</Text>
      <Text>Pressure: {press}</Text>
      <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
        
        <View style={{alignItems:'center'}}>
        <Text>Linear Accel:</Text>
        <Text>{linx.x.toFixed(3)} </Text>
        <Text>{linx.y.toFixed(3)}</Text>
        <Text>{linx.z.toFixed(3)}</Text>
        </View>
        <View style={{alignItems:'center',marginStart:10}}>
        <Text>Gravity:</Text>
        <Text>{grav.x.toFixed(3)} </Text>
        <Text>{grav.y.toFixed(3)} </Text>
        <Text>{grav.z.toFixed(3)} </Text>
        </View>
        
      </View>


      
      <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
        
        <View style={{alignItems:'center'}}>
        <Text>Accelerometer:</Text>
        <Text>{accelerometer.x.toFixed(3)} </Text>
        <Text>{accelerometer.y.toFixed(3)} </Text>
        <Text>{accelerometer.z.toFixed(3)} </Text>
        </View>
        <View style={{alignItems:'center',marginStart:10}}>
        <Text>MagneticField:</Text>
        <Text>{magno.x.toFixed(3)} </Text>
        <Text>{magno.y.toFixed(3)} </Text>
        <Text>{magno.z.toFixed(3)} </Text>
        </View>
        
      </View>
      
      <Text>Light: {light}</Text>
      <Text>Ambient Temp: {ambi}</Text>
      <Text>Temperature: {temp}</Text>
      <Text>Orientation: {ori.toFixed(3)}</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableHighlight style={styles.button}onPress={()=>{setBut(!but)}}><Text style={styles.buttonText}>Start</Text></TouchableHighlight>
      <TouchableHighlight style={[styles.button,{backgroundColor:'red'}]} onPress={rem}><Text style={[styles.buttonText,{color:"black"}]}>Stop</Text></TouchableHighlight>
      </View>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  head:{
    fontSize:30,
    margin:10,
    textAlign:'center'
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  button: {
    marginTop:10,
    marginEnd:6,
    backgroundColor: '#007BFF', 
    borderRadius: 8, 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
})