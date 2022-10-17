import React  from "react";
import { Image, SafeAreaView, StyleSheet,Text, View, TouchableOpacity, Dimensions, TouchableHighlight} from 'react-native';
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from "../Components/Button";

const DetailsScreen = ({navigation, route}) => {
    const item =route.params;
    return (
        <SafeAreaView style={{backgroundColor: COLORS.while}}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack}/>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Detalles</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: 280}}>
                    <Image source={item.image} style={{height: 220, width: 220}}/>
                </View>
                <View style={style.details}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: COLORS.while}}>{item.name}</Text>
                    </View>
                    <View style={style.iconContainer}>
                        <Icon name="favorite-border" color={COLORS.primary} size={25}/>
                    </View>
                    <Text style={style.detailsText}>
                        <Text>{item.detalles}</Text>
                    </Text>
                    <View style={{marginTop: 40, marginBottom: 40}}>
                        <SecondaryButton title="Agregar al carrito"/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
      },
    iconContainer: {
        backgroundColor: COLORS.while,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      },
      detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: COLORS.while,
      },

});

export default DetailsScreen;