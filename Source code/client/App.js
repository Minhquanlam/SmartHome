import React, { Component, useEffect, useState, useFocusEffect } from 'react';
import {
  Button,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Axios from 'axios';

function LoginScreen({ navigation }) {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={{}}>
      <Image
        source={require('./assets/anhh.png')}
        style={{ width: '100%' , height: 260 }}
      />

      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <TextInput
          style={styles.input1}
          onChangeText={onChangeText}
          value={text}
          placeholder="Username"
        />
        <TextInput
          style={styles.input2}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
        />
        <TouchableOpacity
          style={{
            width: 350,
            height: 40,
            backgroundColor: '#1877f2',
            borderRadius: 10,
            paddingLeft: 150,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ paddingTop: 5, fontSize: 20, color: '#b3b3b3' }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
     
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 100,
          justifyContent: 'center',
        }}>
        <View style={{ width: 110, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ width: 20, textAlign: 'center' }}>Or</Text>
        </View>
        <View style={{ width: 110, height: 1, backgroundColor: 'black' }} />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            width: 350,
            height: 40,
            backgroundColor: '#e8f0fe',
            borderRadius: 7,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Create Account')}>
          <Text style={{ fontWeight: 'bold', color: '#1877f2' }}>
            Create new account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function CreateAccount(){
  const [create_user, onChangeText] = React.useState("");
  const [create_pass, onChangeNumber] = React.useState('');
  return (
          <View style={{}}>
        
          <Image source={require('./assets/anhh.png')} style={{ height: 260,width: '100%'}} />
        
      
          <View style={{marginTop: 40, alignItems: 'center'}}>
          <TextInput
        style={styles.input1}
        onChangeText={onChangeText}
        value={create_user}
        placeholder="Username"
      />
      <TextInput
        style={styles.input2}
        onChangeText={onChangeNumber}
        value={create_pass}
        placeholder="Password"
        
      />
            <TouchableOpacity style={{ width: 350, height: 40,
     backgroundColor:'#1877f2', borderRadius: 10, paddingLeft: 150 }}
        
      >
      <Text style={{  paddingTop: 5,fontSize: 20, color: '#b3b3b3'}}>Create</Text>
      </TouchableOpacity>
      
      </View>
      
      </View>
         
          
  );
}

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('./assets/hinhnendep.png')}
          style={{ flex: 1 }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 180,
              marginBottom: 130,
              marginTop: 100,
            }}>
            <Image
              source={require('./assets/smart2.png')}
              style={{ height: 250, width: 250 }}
            />
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                justifyContent: 'center',
              }}>
              
              SMART HOME
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 150,
              justifyContent: 'center',
            }}>
            <Image
              source={require('./assets/controll.png')}
              style={{ height: 50, width: 50 }}
            />
            <TouchableOpacity
              style={{
                width: 170,
                height: 50,
                backgroundColor: 'rgba(0,0,0,0.4)',
                borderRadius: 25,
              }}
              onPress={() => navigation.navigate('Controller mode')}>
              <Text
                style={{ paddingLeft: 50, paddingTop: 15, fontWeight: 'bold' }}>
                
                Controller
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 150,
              justifyContent: 'center',
            }}>
            <Image
              source={require('./assets/database5.png')}
              style={{ height: 50, width: 50 }}
            />
            <TouchableOpacity
              style={{
                width: 170,
                height: 50,
                backgroundColor: 'rgba(0,0,0,0.4)',
                borderRadius: 25,
              }}
              onPress={() => navigation.navigate('CHART DATA OPTIONS')}>
              <Text
                style={{ paddingLeft: 65, paddingTop: 15, fontWeight: 'bold' }}>
                
                View
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

function DetailsScreen1({ navigation }) {
  return (
    <View style={{ }}>
      <ImageBackground
        source={require('./assets/hinhnendep.png')}
        style={{  }}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 70}}>
       <Image source={require('./assets/teemm.png')} style={{height: 50 , width :  50 }} />
        <TouchableOpacity style={{ width: 150, height: 50,
     backgroundColor:'rgba(0,0,0,0.4)', borderRadius: 25}}
        onPress={() => navigation.navigate('Temp mode')}
      >
      <Text style={{paddingLeft: 28, fontWeight: 'bold', fontSize: 35, color:'rgba(0,0,0,0.4)' }}>Temp</Text>
      </TouchableOpacity>
       </View>
       <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:100}}>
       <Image source={require('./assets/humid.png')} style={{height: 50 , width :  50 }} />
        <TouchableOpacity style={{ width: 150, height: 50,
     backgroundColor:'rgba(0,0,0,0.4)', borderRadius: 25}}
        onPress={() => navigation.navigate('Humid mode')}
      >
      <Text style={{paddingLeft: 22, fontWeight: 'bold', fontSize: 35, color:'rgba(0,0,0,0.4)' }}>Humid</Text>
      </TouchableOpacity>
       </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 90,
            justifyContent: 'center',
          }}>
          <Image
            source={require('./assets/sound.png')}
            style={{ height: 50, width: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate('Sound mode')}>
            <Text
              style={{
                paddingLeft: 13,
                paddingTop: 1,
                fontWeight: 'bold',
                fontSize: 40,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Sound
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 90,
            justifyContent: 'center',
          }}>
          <Image
            source={require('./assets/light3.png')}
            style={{ height: 50, width: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate('Light mode')}>
            <Text
              style={{
                paddingLeft: 23,
                fontWeight: 'bold',
                fontSize: 40,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Light
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
function DetailsScreen1_4({ navigation }) {
    return (  <View style={{flex: 1}}>
       <ImageBackground source={require('./assets/hinhnendep.png')} style={{flex: 1 }} >
      <View style={{height: 100}}>
      <TouchableOpacity style={{ width: 50, height: 50 , borderRadius: 50/2 , backgroundColor: 'rgba(0,0,0,0.4)', paddingLeft:7, paddingTop: 15, marginLeft: 300}} onPress={() => navigation.navigate('Home')} >
      <Text style={{fontWeight: 'bold', color: 'rgba(0,0,0,0.4)'}}>Home</Text>
      </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems:'center'}}>
       <Image source={require('./assets/teemm.png')} style={{height: 90, width: 90}} /> 
       <Text style={{fontSize: 50}}>Temp</Text>  
    
       </View>
       <View style={{justifyContent: 'center', alignItems:'center'}}>
       
        <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 50 }} onPress={() => navigation.navigate('D')}>
      <Text style={{paddingLeft: 50 , fontWeight: 'bold', fontSize: 30,color: 'rgba(0,0,0,0.4)'}}>Detect</Text>
      </TouchableOpacity>
       </View>
        <View style={{justifyContent: 'center', alignItems:'center'}}>
       
        <TouchableOpacity style={{ width: 200, height: 50,
    backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 50 , marginTop: 50}}
        
      >
      <Text style={{paddingLeft: 40 , fontWeight: 'bold', fontSize: 30, color:'rgba(0,0,0,0.4)'}}>Turn up</Text>
      </TouchableOpacity>
       </View>
        <View style={{justifyContent: 'center', alignItems:'center'}}>
       
        <TouchableOpacity style={{ width: 200, height: 50,
    backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 50, marginTop: 50}}
        
      >
      <Text style={{paddingLeft: 20 , fontWeight: 'bold', fontSize: 30, color: 'rgba(0,0,0,0.4)'}}>
      Turn down  </Text>
      </TouchableOpacity>
       </View>
      
      
       </ImageBackground>
       
      </View>
    
    );
}

function DetailsScreen1_1({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/hinhnendep.png')}
        style={{ flex: 1 }}>
        <View style={{ height: 100 }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: 'rgba(0,0,0,0.4)',
              paddingLeft: 7,
              paddingTop: 15,
              marginLeft: 300,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.4)' }}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('./assets/humid.png')}
            style={{ height: 90, width: 90 }}
          />
          <Text style={{ fontSize: 50 }}>Humid</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 50,
            }}>
            <Text
              style={{
                paddingLeft: 50,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Detect
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 50,
              marginTop: 50,
            }}>
            <Text
              style={{
                paddingLeft: 40,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Turn up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 50,
              marginTop: 50,
            }}>
            <Text
              style={{
                paddingLeft: 20,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Turn down
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

function DetailsScreen1_2({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/hinhnendep.png')}
        style={{ flex: 1 }}>
        <View style={{ height: 100 }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: 'rgba(0,0,0,0.4)',
              paddingLeft: 7,
              paddingTop: 15,
              marginLeft: 300,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.4)' }}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('./assets/sound.png')}
            style={{ height: 90, width: 90 }}
          />
          <Text style={{ fontSize: 50 }}>Sound</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 50,
            }}>
            <Text
              style={{
                paddingLeft: 50,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Detect
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 50,
              marginTop: 50,
            }}>
            <Text
              style={{
                paddingLeft: 40,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Turn up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 50,
              marginTop: 50,
            }}>
            <Text
              style={{
                paddingLeft: 20,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Turn down
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

function DetailsScreen1_3({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/hinhnendep.png')}
        style={{ flex: 1 }}>
        <View style={{ height: 100 }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: 'rgba(0,0,0,0.4)',
              paddingLeft: 7,
              paddingTop: 15,
              marginLeft: 300,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.4)' }}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('./assets/light3.png')}
            style={{ height: 90, width: 90 }}
          />
          <Text style={{ fontSize: 50 }}>Light</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 50,
            }}>
            <Text
              style={{
                paddingLeft: 50,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Detect
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 50,
              marginTop: 50,
            }}>
            <Text
              style={{
                paddingLeft: 40,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Turn up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 50,
              marginTop: 50,
            }}>
            <Text
              style={{
                paddingLeft: 20,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Turn down
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
function DetailScreens2({ navigation }) {
  return (
    <View style={{  }}>
      <ImageBackground
        source={require('./assets/hinhnendep.png')}
        style={{ }}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 70}}>
       <Image source={require('./assets/teemm.png')} style={{height: 50 , width :  50 }} />
        <TouchableOpacity style={{ width: 150, height: 50,
     backgroundColor:'rgba(0,0,0,0.4)', borderRadius: 25}}
        onPress={() => navigation.navigate('TEMP DATA')}
      >
      <Text style={{paddingLeft: 28, fontWeight: 'bold', fontSize: 35, color:'rgba(0,0,0,0.4)' }}>Temp</Text>
      </TouchableOpacity>
       </View>
       <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:100}}>
       <Image source={require('./assets/humid.png')} style={{height: 50 , width :  50 }} />
        <TouchableOpacity style={{ width: 150, height: 50,
     backgroundColor:'rgba(0,0,0,0.4)', borderRadius: 25}}
        onPress={() => navigation.navigate('HUMID DATA')}
      >
      <Text style={{paddingLeft: 22, fontWeight: 'bold', fontSize: 35, color:'rgba(0,0,0,0.4)' }}>Humid</Text>
      </TouchableOpacity>
       </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 90,
            justifyContent: 'center',
          }}>
          <Image
            source={require('./assets/sound.png')}
            style={{ height: 50, width: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate('SOUND DATA')}>
            <Text
              style={{
                paddingLeft: 13,
                paddingTop: 1,
                fontWeight: 'bold',
                fontSize: 40,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Sound
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 90,
            justifyContent: 'center',
          }}>
          <Image
            source={require('./assets/light3.png')}
            style={{ height: 50, width: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: 25,
            }}
            onPress={() => navigation.navigate('LIGHT DATA')}>
            <Text
              style={{
                paddingLeft: 23,
                fontWeight: 'bold',
                fontSize: 40,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Light
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
function DetailScreen2_3 ({navigation}){
 return (
      <ScrollView>
      <View style={{flex: 1}}>
       <ImageBackground source={require('./assets/hinhnendep.png')} style={{flex: 1 }} >
          <>
      <Text style={{textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16, color:'rgba(0,0,0,0.8)'}}>Line Chart</Text>
      <ScrollView horizontal={true}>
      <LineChart
       data={{
          labels:['8h', '8h5','6','23','4','13','41','13','56','34','78','34','56','25','65','12','54','65','12','45','76','77','12','34', '45','23','43','89',
          '8h', '8h5','6','23','4','13','41','13','56','34','78','34','56','25','65','12','54','65','12','45','76','77','12','34', '45','23','43','89'] ,
          
          datasets: [
            {
              data: [0,100,30,40,10,2,30,40,50,20,20,45,6,77,22,46,89,21,23,44,56,78,56,78,99,45, 0,100,30,40,10,2,30,40,50,20,20,45,6,77,22,46,89,21,23,44,56,78,56,78,99,45],
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 5,
            },
          ],
        }}
        width={Dimensions.get('window').width+650}
        height={460}
        chartConfig={{
    
          backgroundGradientFrom: 'rgba(88,37,123, 0.1)',
          backgroundGradientTo: 'rgba(88,37,123, 0.1)',
          backgroundGradientFromOpacity: 160,
          fillShadowGradientFrom: 'red',
          decimalPlaces: 0,
          fillShadowGradientFromOffset: 0.1,
          color:() => 'rgba(0,0,0,0.9)',
          style: {
            borderRadius: 16,
            justifyContent: 'center'
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          marginLeft: 10
        }}
      />
      </ScrollView>
    </>
    <View>
      <TouchableOpacity style={{ width: 100, height: 60, borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,0.4)' , justifyContent: 'center',  marginTop:100, paddingLeft: 11}}
        onPress={() => navigation.navigate('CHART DATA OPTIONS')} >
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'rgba(0,0,0,0.4)'}}>Back</Text>
      </TouchableOpacity>
    </View>
       </ImageBackground>
       
      </View>
      </ScrollView>
      
 );

}
function DetailScreen2({ navigation }) {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios({
      method: 'post',
      url: 'http://localhost:3000',
      data: { sql: 'SELECT * FROM GAS_VALUE' },
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then((res) => {
        const tempLabels = [],
          tempData = [];
        console.log(res);
        for (let row in res.data) {
          tempLabels.push(res.data[row].gas_time);
          tempData.push(res.data[row].gas_number);
        }
        setLabels(tempLabels);
        setData(tempData);
      })
      .catch((err) => {
        console.log('Error:', err.message);
      });
  }, []);
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('./assets/hinhnendep.png')}
          style={{ flex: 1 }}>
          <>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Line Chart
            </Text>
            <ScrollView horizontal={true}>
              <LineChart
                data={{
                  labels: labels,
                  datasets: [
                    {
                      data: data,
                      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                      strokeWidth: 5,
                    },
                  ],
                }}
                width={Dimensions.get('window').width + 650}
                height={460}
                chartConfig={{
                  backgroundGradientFrom: 'rgba(88,37,123, 0.1)',
                  backgroundGradientTo: 'rgba(88,37,123, 0.1)',
                  backgroundGradientFromOpacity: 160,
                  fillShadowGradientFrom: 'red',
                  decimalPlaces: 0,
                  fillShadowGradientFromOffset: 0.1,
                  color: () => 'rgba(0,0,0,0.9)',
                  style: {
                    borderRadius: 16,
                    justifyContent: 'center',
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginLeft: 10,
                }}
              />
            </ScrollView>
          </>
          <View>
            <TouchableOpacity
              style={{
                width: 100,
                height: 60,
                borderRadius: 40,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'center',
                marginTop: 100,
                paddingLeft: 11,
              }}
              onPress={() => navigation.navigate('CHART DATA OPTIONS')}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'rgba(0,0,0,0.4)',
                }}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
function DetailScreen2_1({ navigation }) {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios({
      method: 'post',
      url: 'http://localhost:3000',
      data: { sql: 'SELECT * FROM SOUND_VALUE' },
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then((res) => {
        const tempLabels = [],
          tempData = [];
        console.log(res);
        for (let row in res.data) {
          tempLabels.push(res.data[row].sound_time);
          tempData.push(res.data[row].sound_number);
        }
        setLabels(tempLabels);
        setData(tempData);
      })
      .catch((err) => {
        console.log('Error:', err.message);
      });
  }, []);
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('./assets/hinhnendep.png')}
          style={{ flex: 1 }}>
          <>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Line Chart
            </Text>
            <ScrollView horizontal={true}>
              <LineChart
                data={{
                  labels: labels,
                  datasets: [
                    {
                      data: data,
                      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                      strokeWidth: 5,
                    },
                  ],
                }}
                width={Dimensions.get('window').width + 650}
                height={460}
                chartConfig={{
                  backgroundGradientFrom: 'rgba(88,37,123, 0.1)',
                  backgroundGradientTo: 'rgba(88,37,123, 0.1)',
                  backgroundGradientFromOpacity: 160,
                  fillShadowGradientFrom: 'red',
                  decimalPlaces: 0,
                  fillShadowGradientFromOffset: 0.1,
                  color: () => 'rgba(0,0,0,0.9)',
                  style: {
                    borderRadius: 16,
                    justifyContent: 'center',
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginLeft: 10,
                }}
              />
            </ScrollView>
          </>
          <View>
            <TouchableOpacity
              style={{
                width: 100,
                height: 60,
                borderRadius: 40,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'center',
                marginTop: 100,
                paddingLeft: 11,
              }}
              onPress={() => navigation.navigate('CHART DATA OPTIONS')}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'rgba(0,0,0,0.4)',
                }}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
function DetailScreen2_2({ navigation }) {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios({
      method: 'post',
      url: 'http://localhost:3000',
      data: { sql: 'SELECT * FROM LIGHT_VALUE' },
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then((res) => {
        const tempLabels = [],
          tempData = [];
        console.log(res);
        for (let row in res.data) {
          tempLabels.push(res.data[row].light_time);
          tempData.push(res.data[row].light_number);
        }
        setLabels(tempLabels);
        setData(tempData);
      })
      .catch((err) => {
        console.log('Error:', err.message);
      });
  }, []);
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('./assets/hinhnendep.png')}
          style={{ flex: 1 }}>
          <>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 16,
                marginTop: 16,
                color: 'rgba(0,0,0,0.4)',
              }}>
              Line Chart
            </Text>
            <ScrollView horizontal={true}>
              <LineChart
                data={{
                  labels: labels,
                  datasets: [
                    {
                      data: data,
                      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                      strokeWidth: 5,
                    },
                  ],
                }}
                width={Dimensions.get('window').width + 650}
                height={460}
                chartConfig={{
                  backgroundGradientFrom: 'rgba(88,37,123, 0.1)',
                  backgroundGradientTo: 'rgba(88,37,123, 0.1)',
                  backgroundGradientFromOpacity: 160,
                  fillShadowGradientFrom: 'red',
                  decimalPlaces: 0,
                  fillShadowGradientFromOffset: 0.1,
                  color: () => 'rgba(0,0,0,0.9)',
                  style: {
                    borderRadius: 16,
                    justifyContent: 'center',
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginLeft: 10,
                }}
              />
            </ScrollView>
          </>
          <View>
            <TouchableOpacity
              style={{
                width: 100,
                height: 60,
                borderRadius: 40,
                backgroundColor: 'rgba(0,0,0,0.4)',
                justifyContent: 'center',
                marginTop: 100,
                paddingLeft: 11,
              }}
              onPress={() => navigation.navigate('CHART DATA OPTIONS')}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'rgba(0,0,0,0.4)',
                }}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Controller mode" component={DetailsScreen1} />
        <Stack.Screen name="CHART DATA OPTIONS" component={DetailScreens2} />
        <Stack.Screen name="HUMID DATA" component={DetailScreen2} />
        <Stack.Screen name="TEMP DATA" component={DetailScreen2_3} />
        <Stack.Screen name="Temp mode" component={DetailsScreen1_4} />
        <Stack.Screen name="Humid mode" component={DetailsScreen1_1} />
        <Stack.Screen name="Sound mode" component={DetailsScreen1_2} />
        <Stack.Screen name="Light mode" component={DetailsScreen1_3} />
        <Stack.Screen name="SOUND DATA" component={DetailScreen2_1} />
        <Stack.Screen name="LIGHT DATA" component={DetailScreen2_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  input1: {
    height: 40,
    width: 350,
    borderWidth: 0.5,
    padding: 10,
    borderColor: 'grey',
  },
  input2: {
    height: 40,
    width: 350,
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 14,
  },
});
export default App;
