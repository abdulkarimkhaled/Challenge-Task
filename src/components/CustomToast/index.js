import React, { Component } from 'react';
import {
    Text,
    View,
    Animated
} from 'react-native';

import metrics, { calcWidth, calcHeight, calcWidthRatio } from '../../config/metrics';
import { styles } from './styles'

import Check from "./svgs/Check"
import Error from "./svgs/Error"
import Info from "./svgs/Info"

var currentThread = null

export class CustomToast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            transAnim: new Animated.Value(0),
            errorMessage: "",
            state: "check",
            show: false
        };
    }
    componentDidMount() {
        global.openToast = this.open
        global.closeToast = this.close
    }
    open = (message, state) => {
        this.setState({ show: true })
        let _state = {
            e: "error",
            s: "check",
            i: 'info'
        }
        // this.setState({ massage, state: _state[state] })
        if (currentThread) clearTimeout(currentThread);
        // console.log(currentThread)
        this.setState({
            fadeAnim: new Animated.Value(0),
            transAnim: new Animated.Value(0),
        }, () => {


            this.setState({ errorMessage: message, state: _state[state] }, () => {
                delayTime = 0
                Animated.parallel([
                    Animated.timing(
                        this.state.fadeAnim,
                        { toValue: 1, duration: 500, delay: delayTime, useNativeDriver: true },
                    ),
                    // Animated.timing(
                    //     this.state.transAnim,
                    //     { toValue: -calcHeight(130), duration: 800, delay: delayTime, useNativeDriver: true },
                    // )
                ]).start(() => {

                    currentThread = setTimeout(this.close, 2000)
                })
            })
        })

    }
    close = () => {

        Animated.parallel([
            Animated.timing(
                this.state.fadeAnim,
                { toValue: 0, duration: 500, useNativeDriver: true },
            ),
            Animated.timing(
                this.state.transAnim,
                { toValue: 0, duration: 500, useNativeDriver: true },
            )
        ]).start(() => {
            this.setState({
                transAnim: new Animated.Value(0),
                show: false
            })
        })
    }
    render() {
        return (
            this.state.show
            && <Animated.View
                style={{
                    transform: [{ translateY: this.state.transAnim }],
                    position: "absolute",
                    bottom: calcHeight(90),
                    zIndex: 10000001,
                    opacity: this.state.fadeAnim,
                    width: calcWidthRatio(325),
                    alignSelf: "center",
                    backgroundColor: "transparent",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red"

                }}>

                <View style={[
                    styles.contentContainer(this.state.state)
                    , {
                        minHeight: calcHeight(50),
                        flexDirection: 'row',
                        paddingLeft: calcWidth(15)
                    }
                ]}>
                    {this.state.state == 'error' && <Error fill={'white'} width={calcWidth(30)} height={calcWidth(30)} />}
                    {this.state.state == 'check' && <Check fill={'white'} width={calcWidth(30)} height={calcWidth(30)} />}
                    {this.state.state == 'info' && <Info fill={'white'} width={calcWidth(30)} height={calcWidth(30)} />}
                    <Text style={styles.toastText}>{this.state.errorMessage} </Text>
                </View>
            </Animated.View>

        )
    }
}