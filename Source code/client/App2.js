import React, { Component, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
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
              {' '}
              SMART HOME{' '}
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
                {' '}
                Controller{' '}
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
                {' '}
                View{' '}
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
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/xanhla.png')}
        style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/gas.png')}
            style={{ height: 50, width: 50, marginLeft: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 60,
            }}
            onPress={() => navigation.navigate('Gas mode')}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', fontSize: 40 }}>
              {' '}
              Gas{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <Image
            source={require('./assets/sound.png')}
            style={{ height: 50, width: 50, marginLeft: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 60,
            }}
            onPress={() => navigation.navigate('Sound mode')}>
            <Text
              style={{
                paddingLeft: 17,
                paddingTop: 1,
                fontWeight: 'bold',
                fontSize: 40,
              }}>
              {' '}
              Sound{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <Image
            source={require('./assets/light3.png')}
            style={{ height: 50, width: 50, marginLeft: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 60,
            }}
            onPress={() => navigation.navigate('Light mode')}>
            <Text style={{ paddingLeft: 30, fontWeight: 'bold', fontSize: 40 }}>
              {' '}
              Light{' '}
            </Text>{' '}
          </TouchableOpacity>{' '}
        </View>{' '}
      </ImageBackground>{' '}
    </View>
  );
}

function DetailsScreen1_1({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/xanhla.png')}
        style={{ flex: 1 }}>
        <View style={{ height: 100 }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: 'green',
              paddingLeft: 7,
              paddingTop: 15,
              marginLeft: 300,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontWeight: 'bold' }}> Home </Text>{' '}
          </TouchableOpacity>{' '}
        </View>{' '}
        <View style={{ marginLeft: 155 }}>
          <Image
            source={require('./assets/gas.png')}
            style={{ height: 90, width: 90 }}
          />{' '}
          <Text style={{ fontSize: 50 }}> Gas </Text>
        </View>{' '}
        <View style={{}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 100,
            }}>
            <Text
              style={{
                paddingLeft: 50,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'white',
              }}>
              {' '}
              Detect{' '}
            </Text>{' '}
          </TouchableOpacity>{' '}
        </View>{' '}
        <View style={{}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 100,
              marginTop: 50,
            }}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', fontSize: 30 }}>
              {' '}
              Turn up{' '}
            </Text>{' '}
          </TouchableOpacity>{' '}
        </View>{' '}
        <View style={{}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 100,
              marginTop: 50,
            }}>
            <Text style={{ paddingLeft: 20, fontWeight: 'bold', fontSize: 30 }}>
              Turn down{' '}
            </Text>{' '}
          </TouchableOpacity>{' '}
        </View>
      </ImageBackground>
    </View>
  );
}

function DetailsScreen1_2({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/xanhla.png')}
        style={{ flex: 1 }}>
        <View style={{ height: 100 }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: 'green',
              paddingLeft: 7,
              paddingTop: 15,
              marginLeft: 300,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontWeight: 'bold' }}> Home </Text>{' '}
          </TouchableOpacity>{' '}
        </View>{' '}
        <View style={{ marginLeft: 130 }}>
          <Image
            source={require('./assets/sound.png')}
            style={{ height: 90, width: 90, marginLeft: 30 }}
          />{' '}
          <Text style={{ fontSize: 50 }}> Sound </Text>
        </View>{' '}
        <View style={{}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 100,
            }}>
            <Text
              style={{
                paddingLeft: 50,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'white',
              }}>
              {' '}
              Detect{' '}
            </Text>{' '}
          </TouchableOpacity>{' '}
        </View>{' '}
        <View style={{}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 100,
              marginTop: 50,
            }}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', fontSize: 30 }}>
              {' '}
              Turn up{' '}
            </Text>{' '}
          </TouchableOpacity>{' '}
        </View>{' '}
        <View style={{}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 100,
              marginTop: 50,
            }}>
            <Text style={{ paddingLeft: 20, fontWeight: 'bold', fontSize: 30 }}>
              Turn down{' '}
            </Text>
          </TouchableOpacity>{' '}
        </View>
      </ImageBackground>
    </View>
  );
}

function DetailsScreen1_3({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/xanhla.png')}
        style={{ flex: 1 }}>
        <View style={{ height: 100 }}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              backgroundColor: 'green',
              paddingLeft: 7,
              paddingTop: 15,
              marginLeft: 300,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontWeight: 'bold' }}> Home </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 140 }}>
          <Image
            source={require('./assets/light3.png')}
            style={{ height: 90, width: 90 }}
          />
          <Text style={{ fontSize: 50 }}> Light </Text>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 100,
            }}>
            <Text
              style={{
                paddingLeft: 50,
                fontWeight: 'bold',
                fontSize: 30,
                color: 'white',
              }}>
              {' '}
              Detect{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 100,
              marginTop: 50,
            }}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', fontSize: 30 }}>
              {' '}
              Turn up{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 100,
              marginTop: 50,
            }}>
            <Text style={{ paddingLeft: 20, fontWeight: 'bold', fontSize: 30 }}>
              Turn down{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
function DetailScreens2({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/xanhla.png')}
        style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/gas.png')}
            style={{ height: 50, width: 50, marginLeft: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 60,
            }}
            onPress={() => navigation.navigate('GAS DATA')}>
            <Text style={{ paddingLeft: 40, fontWeight: 'bold', fontSize: 40 }}>
              Gas
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <Image
            source={require('./assets/sound.png')}
            style={{ height: 50, width: 50, marginLeft: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 60,
            }}
            onPress={() => navigation.navigate('SOUND DATA')}>
            <Text
              style={{
                paddingLeft: 17,
                paddingTop: 1,
                fontWeight: 'bold',
                fontSize: 40,
              }}>
              Sound
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <Image
            source={require('./assets/light3.png')}
            style={{ height: 50, width: 50, marginLeft: 50 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: 'green',
              marginLeft: 60,
            }}
            onPress={() => navigation.navigate('LIGHT DATA')}>
            <Text style={{ paddingLeft: 30, fontWeight: 'bold', fontSize: 40 }}>
              Light
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
function DetailScreen2({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/Thanh.png')}
        style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            padding: 16,
            marginTop: 16,
          }}>
          {' '}
          Line Chart{' '}
        </Text>
        <LineChart
          data={{
            labels: ['8h', '8h5'],
            datasets: [
              {
                data: [0, 100],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={400}
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft: 10,
          }}
        />
        <View>
          <TouchableOpacity
            style={{
              width: 100,
              height: 60,
              backgroundColor: 'green',
              marginLeft: 140,
              marginTop: 50,
              paddingLeft: 17,
              paddingTop: 8,
            }}
            onPress={() => navigation.navigate('CHART DATA OPTIONS')}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
function DetailScreen2_1({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/Thanh.png')}
        style={{ flex: 1 }}>
        <>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              padding: 16,
              marginTop: 16,
            }}>
            Line chart data
          </Text>
          <LineChart
            data={{
              labels: ['8h', '8h5'],
              datasets: [
                {
                  data: [0, 100],
                  strokeWidth: 2,
                },
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={400}
            chartConfig={{
              backgroundColor: 'white',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginLeft: 10,
            }}
          />
        </>
        <View>
          <TouchableOpacity
            style={{
              width: 100,
              height: 60,
              backgroundColor: 'green',
              marginLeft: 140,
              marginTop: 50,
              paddingLeft: 17,
              paddingTop: 8,
            }}
            onPress={() => navigation.navigate('CHART DATA OPTIONS')}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
function DetailScreen2_2({ navigation }) {
  var labels = [], data = [];
  useEffect(() => {
    Axios({
      method: 'post',
      url: 'http://localhost:3000',
      data: { sql: "SELECT * FROM LIGHT_VALUE" },
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then((res) => {
      console.log(res);
      for (let row in res.data) {
        labels.push(res.data[row].light_time);
        data.push(res.data[row].light_number);
      }
      console.log(labels);
      console.log(data);
    })
    .catch(err => {
      console.log('Error:', err.message);
    });
  })
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/Thanh.png')}
        style={{ flex: 1 }}>
        <>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              padding: 16,
              marginTop: 16,
            }}>
            Line Chart
          </Text>
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: data,
                  strokeWidth: 2,
                },
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={400}
            chartConfig={{
              backgroundColor: 'white',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginLeft: 10,
            }}
          />
        </>
        <View>
          <TouchableOpacity
            style={{
              width: 100,
              height: 60,
              backgroundColor: 'green',
              marginLeft: 140,
              marginTop: 50,
              paddingLeft: 17,
              paddingTop: 8,
            }}
            onPress={() => navigation.navigate('CHART DATA OPTIONS')}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Controller mode" component={DetailsScreen1} />
        <Stack.Screen name="CHART DATA OPTIONS" component={DetailScreens2} />
        <Stack.Screen name="GAS DATA" component={DetailScreen2} />
        <Stack.Screen name="Gas mode" component={DetailsScreen1_1} />
        <Stack.Screen name="Sound mode" component={DetailsScreen1_2} />
        <Stack.Screen name="Light mode" component={DetailsScreen1_3} />
        <Stack.Screen name="SOUND DATA" component={DetailScreen2_1} />
        <Stack.Screen name="LIGHT DATA" component={DetailScreen2_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
