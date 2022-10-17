import React  from "react";
import { Image, SafeAreaView, StyleSheet,Text, View, TouchableOpacity, Dimensions, TouchableHighlight} from 'react-native';
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { TouchableOpacity } from "react-native-web";
import COLORS from '../../consts/colors';
import categories from "../../consts/categories";
import foods from "../../consts/foods";
import { Colors } from "react-native/Libraries/NewAppScreen";
const {width}= Dimensions.get('screen');
const cardWidth=width/2-20;

const HomeScreen = ({navigation}) => {
    const[selectedCategoryIndex,setselectedCategoryIndex]= React.useState(0);

    const ListCategories=()=>{
        //console.log(categories);
        
        return(
            //menu opcional A CAMBIAR POR BOTONES
            <ScrollView horizontal showsHorizontalScrollIndicator={false} 
            contentContainerStyle={style.categoriesListContainer}>
              {categories.map( (cat,index) => {
                return (
                  <TouchableOpacity key={cat.id}
                    onPress={ (event)=>{
                      alert(event.nativeEvent)
                    }}>
                    <View style={{
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? COLORS.primary
                          : COLORS.secondary,
                      ...style.categoryBtn,}}>
                        <View style={style.categorybtnImgCom}>
                        <Image
                            source={cat.image}
                            style={{height: 35, width: 35, resizeMode: 'cover'}}
                        />
                        </View>
                        <Text
                              style={{
                              fontSize: 15,
                              fontWeight: 'bold',
                              marginLeft: 10,
                              color:
                              selectedCategoryIndex == index
                                ? COLORS.while
                                : COLORS.primary,
                          }}> 
                          {cat.name}
                          </Text>
                      </View>
                  </TouchableOpacity>
              )}
              )}
              </ScrollView>
        );
    };
    //console.log(categories.map((cat) => cat));
    //console.log(categories.map((cat) => cat.name));

    const Card = ({food}) =>{
      return (
      <TouchableHighlight underlayColor={COLORS.while} 
      activeOpacity={0.9} 
      onPress={() => navigation.navigate('DetailsScreean',food)}>
        <View style={style.card}>
        <View style={{alignItems: 'center', top: -40}}>
            <Image source={food.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal:20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>{food.ingredientes}</Text>
          </View>
          <View
            style={{ marginTop: 10,marginHorizontal: 20,flexDirection: 'row',justifyContent: 'space-between',}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>$ {food.precio}</Text>
              <View style={style.addToCartBtn}>
                <Icon name="add" size={20} color={COLORS.while}/>
              </View>
            </View>
      </View>
      </TouchableHighlight>
      );
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={style.header}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 28}}>Hola,</Text>
                <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                  Bienvenido
                </Text>
              </View>
              <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
                ¿Què deseas ordenar hoy?              </Text>
            </View>
                   
          </View>
       <View 
       style={{
        marginTop:40, 
        flexDirection:"row",
        paddingHorizontal:20,
        }}>

       <View style={style.inputContainer}>
        <Icon name="search" size={28}/>
        <TextInput 
        style={{flex:1, fontSize:18}} 
        placeholder="Buscar comida"
       />
       </View>
       <View style={style.sortBtn}>
        <Icon name="tune" size={28} color={COLORS.while}/>
       </View>
       </View>
            <View>
                  <ListCategories />
            </View>

            <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={foods}
            renderItem={({item}) => <Card food={item}/>}
            />
       </SafeAreaView> 
        
       );
};
const style =StyleSheet.create({
    header:{
        marginTop: 20,
        flexDirection: 'row',
        juatifyContent:'space-betweeb',
        paddingHorizontal:20,

    },
    inputContainer:{
        flex:1,
        height:40,
        borderRadius:20,
        flexDirection:'row',
        backgroundColor:COLORS.light,
        paddingHorizontal:20,
        alignItems: 'center',
    },
    sortBtn:{
        width:50,
        height:40,
        marginLeft:10,
        backgroundColor:COLORS.primary,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      categorybtnImgCom:{
        height: 35,
        width: 35,
        backgroundColor: COLORS.while,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
      },
      card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.while,
      },
      addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default HomeScreen;