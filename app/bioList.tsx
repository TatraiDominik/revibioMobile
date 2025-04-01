import React from 'react';
import { View, Image, Text } from 'react-native';
import globalStyles from "@/assets/globalStyles";

const BACKEND_URL = 'http://65.87.7.245';  

const defaultPfp = require('@/assets/defPfp.png');  

const bioList = () => {
    const userAvatar = null; 

    
    const currentPfp = userAvatar ? `${BACKEND_URL}/file/${userAvatar}` : defaultPfp;

    return (
        <View style={[globalStyles.flex_col, globalStyles.flex_centered, globalStyles.bg_zinc_900, globalStyles.h_full, globalStyles.w_full, globalStyles.relative]}>
            <View style={[globalStyles.absolute, globalStyles.w_full, globalStyles.flex_centered, globalStyles.flex_row, globalStyles.bg_zinc_700, globalStyles.gap_5, { bottom: 0, padding: 20, zIndex:30 }]}>
            <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.4236 0.377686C37.7926 0.377686 37.2839 0.579519 36.8984 0.982647C36.5303 1.36825 36.3464 1.87611 36.3464 2.50709C36.3464 3.10302 36.5303 3.59378 36.8984 3.97938C37.2839 4.36498 37.7926 4.55786 38.4236 4.55786C39.0546 4.55786 39.5535 4.36498 39.9215 3.97938C40.3071 3.59378 40.5 3.10302 40.5 2.50709C40.5 1.87611 40.3071 1.36825 39.9215 0.982647C39.5535 0.579519 39.0546 0.377686 38.4236 0.377686ZM6.70439 6.21389C6.14353 6.21389 5.59988 6.35468 5.07406 6.63511C4.56578 6.89802 4.11002 7.213 3.7069 7.58107C3.59569 7.68722 3.51003 7.78658 3.41485 7.88837L3.07627 6.50353H0.5V19.3594H3.94359V10.5979C4.11579 10.4189 4.30286 10.257 4.52206 10.1317C5.13551 9.76363 6.01203 9.57969 7.15129 9.57969H7.99213V6.45058C7.86944 6.36293 7.69445 6.3019 7.4666 6.26684C7.23875 6.23178 6.98483 6.21389 6.70439 6.21389ZM14.9218 6.21389C13.6423 6.21389 12.5209 6.50362 11.5569 7.08202C10.5929 7.64289 9.84739 8.43153 9.32158 9.44811C8.79577 10.4472 8.5329 11.6126 8.5329 12.9447C8.5329 14.2943 8.79577 15.4687 9.32158 16.4678C9.84739 17.4668 10.5929 18.2465 11.5569 18.8074C12.5209 19.3507 13.6423 19.6225 14.9218 19.6225C16.324 19.6225 17.5155 19.3418 18.497 18.7809C19.496 18.2025 20.2855 17.3789 20.8639 16.3097L18.4713 14.9425C18.1032 15.4859 17.6646 15.9416 17.1563 16.3097C16.648 16.6778 15.9473 16.8617 15.0534 16.8617C14.0368 16.8617 13.2303 16.5728 12.6344 15.9944C12.1336 15.4784 11.8631 14.7881 11.796 13.9436H21.2313C21.2664 13.8209 21.2843 13.672 21.2843 13.4967C21.3017 13.3039 21.3108 13.111 21.3108 12.9182C21.3108 11.6212 21.0479 10.4736 20.5221 9.47459C19.9963 8.458 19.2508 7.66042 18.2868 7.08202C17.3403 6.50362 16.2188 6.21389 14.9218 6.21389ZM21.9125 6.50353L26.8556 19.3594H30.1684L34.8741 6.50353H31.3246L28.4908 15.1214L25.5406 6.50353H21.9125ZM36.7146 6.50353V19.3594H40.1582V6.50353H36.7146ZM14.9218 8.92258C16.0085 8.92258 16.8061 9.2636 17.3144 9.94716C17.6228 10.3482 17.8295 10.8275 17.957 11.3673H11.8449C11.9631 10.7493 12.2216 10.2291 12.6344 9.81638C13.2128 9.22046 13.9754 8.92258 14.9218 8.92258Z" fill="#F43F5E"/>
<path d="M38.4231 0.377686C37.7921 0.377686 37.2835 0.579521 36.8979 0.982649C36.5298 1.36825 36.3459 1.87611 36.3459 2.50709C36.3459 3.10302 36.5298 3.59378 36.8979 3.97938C37.2835 4.36498 37.7921 4.55786 38.4231 4.55786C39.0541 4.55786 39.553 4.36498 39.921 3.97938C40.3066 3.59378 40.4995 3.10302 40.4995 2.50709C40.4995 1.87611 40.3066 1.36825 39.921 0.982649C39.553 0.579521 39.0541 0.377686 38.4231 0.377686ZM21.9971 6.50353L26.9434 10.6019L25.5401 6.50353H21.9971ZM31.3241 6.50353L29.3271 12.5772L29.4282 12.6607L33.1213 11.2903L34.8736 6.50353L31.3241 6.50353ZM36.7141 6.50353V9.95679L40.1577 8.67867V6.50353H36.7141Z" fill="#BE123C"/>
<path d="M13.0781 11.8486L8.56178 13.5247C8.62809 14.6303 8.87361 15.6165 9.32158 16.4677C9.84739 17.4667 10.5929 18.2464 11.5569 18.8073C12.5209 19.3507 13.6424 19.6225 14.9218 19.6225C16.324 19.6225 17.5155 19.3417 18.497 18.7808C19.0587 18.4556 19.5468 18.044 19.9757 17.5637L17.7933 15.7552C17.5934 15.9556 17.3843 16.1445 17.1563 16.3096C16.648 16.6777 15.9473 16.8616 15.0534 16.8616C14.0368 16.8616 13.2303 16.5727 12.6344 15.9943C12.1336 15.4783 11.8631 14.788 11.796 13.9435H15.6062L13.0781 11.8486ZM3.94359 15.2385L0.5 16.5158V19.3593H3.94359V15.2385Z" fill="#BE123C"/>
</svg>

                <View>
                    {/* Avatar */}
                    <Image
                        source={currentPfp}  
                        style={{ width: 50, height: 50, borderRadius: 25, objectFit: 'cover' }} 
                        alt="Profile Picture"
                    />
                </View>
            </View>
            <View style={[globalStyles.flex_col, globalStyles.flex_centered, globalStyles.w_full, globalStyles.h_full, globalStyles.gap_5, {padding:50}]}>
                <Text style={[globalStyles.text_4xl, globalStyles.text_zinc_100]}>Your bio pages</Text>
                <View style={[globalStyles.bg_zinc_700,globalStyles.flex_col, globalStyles.flex_centered, globalStyles.w_full, globalStyles.gap_5, {height:"70%", borderRadius:20}]}>
                        <Image
                            source={currentPfp}  
                            style={{ width: 100, height: 100, borderRadius: "100%", objectFit: 'cover' }} 
                            alt="Profile Picture"
                        />
                        
                        <Text style={[globalStyles.text_lg, globalStyles.text_rose_500]}>@gasparalaszlo</Text>
                </View>
                <Text style={[globalStyles.text_2xl, globalStyles.text_zinc_100]}>Gáspár László</Text>
                <View style={[globalStyles.flex_row, globalStyles.flex_centered, globalStyles.gap_2]}>
                    <View style={[globalStyles.bg_zinc_400, {borderRadius:5, height:5, width:20}]}></View>
                    <View style={[globalStyles.bg_zinc_400, {borderRadius:5, height:5, width:20}]}></View>
                    <View style={[globalStyles.bg_zinc_400, {borderRadius:5, height:5, width:20}]}></View>
                </View>
            </View>
        </View>
    );
};

export default bioList;
