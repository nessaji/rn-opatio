import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, Dimensions, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { images } from '../../common/images';
import { p } from '../../common/normalize';
import { colors } from '../../common/colors';
import Carousel from 'react-native-banner-carousel';
import { Entypo } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

export default class LotesEdit extends Component {

    state = {
        text: ''
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.header}>

                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Image source={images.back} style={{ width: 20, height: 18 }} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.vertical, { backgroundColor: colors.WHITE }]}>
                            <Text style={{ color: colors.BLACK, fontWeight: '700' }}>{'GUARDAR'}</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.textRow}>
                    <Text style={styles.text1}>{'Título Nota'}</Text>
                    <Image source={images.photoAdd} style={{ width: p(38), height: p(35) }} />
                </View>

                <TextInput
                    style={styles.inputBox}
                    placeholder={'Añadir descripción'}
                    placeholderTextColor={colors.GREY4}
                    multiline={true}
                    blurOnSubmit={false}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />

                <View style={[styles.item, { borderBottomWidth: 0 }]}>
                    <Image source={images.map} style={{ width: p(18), height: p(25), marginTop: p(7) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Ubicación y coordenadas'}</Text>
                        <Text style={styles.text4}>{'Puedes marcar en el mapa una ubicación específica para la tarea que estas creando:'}</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: colors.WHITE, alignItems: 'center' }}>
                    <Text style={styles.text5}>{'MARCAR EN EL MAPA'}</Text>
                    <View style={[styles.vertical, { marginTop: p(18), width: p(160), height: p(40) }]}>
                        <Text style={{ color: colors.WHITE, fontWeight: '700' }}>{'USAR MI UBICACIÓN'}</Text>
                    </View>
                </View>

                <View style={[styles.item, { justifyContent: 'space-between' }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={images.square} style={{ width: p(22), height: p(22), marginTop: p(7) }} />
                        <View style={{ marginLeft: p(25) }}>
                            <Text style={styles.text3}>{'En lote'}</Text>
                            <Text style={styles.text4}>{'Lote 21 - Santa Rosa'}</Text>
                        </View>
                    </View>
                    <Entypo name="chevron-down" color={colors.GREY8} size={36} />

                </View>

                <View style={[styles.item, { borderBottomWidth: 0 }]}>
                    <Image source={images.pin} style={{ width: p(12), height: p(22), marginTop: p(7), marginLeft: p(8) }} />
                    <View style={{ marginLeft: p(25) }}>
                        <Text style={styles.text3}>{'Archivos adjuntos'}</Text>
                        <Text style={styles.text4}>{'0 Archivos'}</Text>
                    </View>
                    <Text style={styles.text5}>{'ADJUNTAR'}</Text>
                </View>

                <View style={{ backgroundColor: colors.WHITE, alignItems: 'center', paddingBottom: p(20) }}>
                    <TouchableOpacity>
                        <Image
                            source={images.record}
                            style={{ width: p(77), height: p(77), marginBottom: p(12) }}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.text5, { position: 'absolute', right: p(32), top: p(12)}]}>{'BORRAR'}</Text>
                    <Text style={{ color: colors.GREY8, fontWeight: '400', fontSize: p(15) }}>{'Nota de voz 1:21 '}</Text>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.ORANGE
    },
    text1: {
        color: colors.WHITE,
        fontWeight: '700',
        marginTop: p(8),
        fontSize: p(37)
    },
    text2: {
        color: colors.WHITE,
        fontWeight: '500',
        fontSize: p(17),
        marginVertical: p(14)
    },
    text3: {
        color: colors.BLACK,
        fontWeight: '500',
        fontSize: p(18)
    },
    text4: {
        color: colors.GREY8,
        fontWeight: '400',
        fontSize: p(18)
    },
    text5: {
        color: colors.ORANGE,
        flex: 1,
        textAlign: 'right',
        fontWeight: '700',
        fontSize: p(16)
    },
    item: {
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        padding: p(30),
        borderBottomColor: colors.GREY3,
        borderBottomWidth: p(7),
        alignItems: 'center'
    },
    vertical: {
        backgroundColor: colors.ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
        width: p(142),
        height: p(29),
        borderRadius: p(3),
        elevation: 1,
        color: colors.WHITE
    },
    header: {
        backgroundColor: colors.ORANGE,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: p(20),
        height: p(60),
        alignItems: 'center',
    },
    inputBox: {
        height: p(134),
        margin: p(30),
        textAlignVertical: 'top',
        backgroundColor: '#FFB661',
        borderRadius: p(5),
        fontSize: p(20),
        fontWeight: '500',
        padding: p(14),
        color: colors.GREY4
    },
    textRow: {
        backgroundColor: colors.ORANGE,
        padding: p(30),
        paddingBottom: p(10),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});