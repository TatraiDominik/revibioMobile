import React, { useEffect, useState } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import globalStyles from "@/assets/globalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { jwtDecode } from 'jwt-decode';

const BACKEND_URL = 'http://65.87.7.245';  

const defaultPfp = require('@/assets/defPfp.png');  
const bgPic = require('@/assets/dasauto.jpg'); 

const logOut = () => {
    AsyncStorage.removeItem("user");
    router.push('/login');
}

const BioList = () => {
    const [avatar, setAvatarId] = useState<string | null>(null);

    useEffect(() => {
        
        const fetchUserData = async () => {
            try {
                
                const userToken = await AsyncStorage.getItem('user');
                if (userToken) {
                    const decodedToken = jwtDecode(userToken) as { avatar?: string };
                    
                    if (decodedToken && decodedToken.avatar) {
                        setAvatarId(decodedToken.avatar);
                    }
                    
                    
                    const storedUserData = await AsyncStorage.getItem('userdata');
                    if (storedUserData) {
                        const userData = JSON.parse(storedUserData);
                        
                        if (userData.avatar) {
                            setAvatarId(userData.avatar);
                        }
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
    
        fetchUserData();
    }, []);

    // Use the avatar ID to construct the avatar URL, or use a default avatar if no ID exists
    const currentPfp = avatar ? `${BACKEND_URL}/file/${avatar}` : defaultPfp;

    return  (   
        <View style={[globalStyles.flex_col, globalStyles.flex_centered, globalStyles.bg_zinc_900, globalStyles.h_full, globalStyles.w_full, globalStyles.gap_5, globalStyles.relative]}>
            <TouchableOpacity onPress={logOut} style={[globalStyles.absolute, {top:10, left:10}]}>
                <Text style={[globalStyles.text_rose_500, globalStyles.text_lg]}>Log out</Text>
            </TouchableOpacity>
            <ImageBackground 
                source={bgPic}  
                style={[globalStyles.flex_col, globalStyles.flex_centered, globalStyles.gap_5, globalStyles.relative, { height: '60%', width: "80%" }]}
                imageStyle={{ borderRadius: 20, width: '100%', height: '100%', zIndex: 1 }} 
            >
     
                <View style={{ 
                    position: "absolute", 
                    top: 0, left: 0, right: 0, bottom: 0, 
                    backgroundColor: "rgba(0, 0, 0, 0.7)",  
                    borderRadius: 20,
                    zIndex: 1
                }} />

                <View style={[globalStyles.flex_col, globalStyles.flex_centered, globalStyles.w_full, globalStyles.gap_5, { height: "80%", zIndex: 2 }]}>
                    <Image
                        source={currentPfp}  
                        style={{ width: 200, height: 200, borderRadius: 100, objectFit: 'cover' }} 
                        alt="Profile Picture"
                    />
                    <Text style={[globalStyles.text_lg, globalStyles.text_rose_500]}>@gasparalaszlo</Text>
                </View>


                <svg style={{ position: "absolute", zIndex: 0, filter: "blur(3rem)" }} width="110%" height="110%" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M236.788 240C236.788 372.548 367.562 479.999 236.788 479.999C106.013 479.999 0 372.548 0 240C0 107.452 106.013 0 236.788 0C367.562 0 236.788 107.452 236.788 240Z" fill="#D4D4D8"/>
                    <path d="M459.566 256.203C470.747 256.633 480.076 265.603 479.243 276.762C470.727 390.71 391.45 479.999 294.91 479.999C192.688 479.999 109.82 379.889 109.82 256.397C109.82 145.419 176.744 53.3249 264.496 35.7993C278.645 32.9733 288.469 47.7125 284.755 61.6556C259.033 158.232 316.864 250.71 459.566 256.203Z" fill="#E11D48"/>
                </svg>
            </ImageBackground>

            <Text style={[globalStyles.text_2xl, globalStyles.text_zinc_100]}>Gáspár László</Text>
            <View style={[globalStyles.flex_row, globalStyles.flex_centered, globalStyles.gap_2]}>
                <View style={[globalStyles.bg_zinc_400, { borderRadius: 5, height: 5, width: 20 }]}></View>
                <View style={[globalStyles.bg_zinc_400, { borderRadius: 5, height: 5, width: 20 }]}></View>
                <View style={[globalStyles.bg_zinc_400, { borderRadius: 5, height: 5, width: 20 }]}></View>
            </View>
        </View>
    );
};

export default BioList;
