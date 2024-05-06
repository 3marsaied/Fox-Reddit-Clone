/**
 * feedSetting is a functional component that renders the feed settings page.
 * 
 * @file feedSetting is a functional component that renders the feed settings page.
 * @module feedSettings
 */
import React, { useEffect, useState } from "react";
import ToggleButton from "@/GeneralElements/ToggleButton/ToggleButton";
import axios from "axios";
import Dropdown from "./dropDownlist";
import { toast } from 'react-toastify';

/**
 * 
 * Adult content,
 * autoplay media, 
 * community themes, 
 * community content sort, 
 * global content view, 
 * open pots in new tab
 */

export default function FeedSettings() {

    //state for each setting statement to be toggled
    const [showMatureContent, setShowMatureContent] = useState(false);
    const [blurMatureImg, setBlurMatureImg] = useState(false);
    const [autoplayMedia, setAutoplayMedia] = useState(true);
    const [communityTheme, setCommunityTheme] = useState(true);
    const [rememberingSortPerCommunity, setRememberingSortPerCommunity] = useState(false);
    const [rememberGlobalView, setrememberGlobalView] = useState(false);
    const [openPostsInNewTab, setOpenPostsInNewTab] = useState(false);
    const changeContent = true;
    const changeMenuContent = false;
    let id = 2;

    const handleToggleInFeedMatureContent = (isChecked) => {
        setShowMatureContent(isChecked);
        toast.success("changes saved. \u{1F60A}");
        console.log(isChecked);
        //console.log(showMatureContent);
    }
    const handleToggleInFeedBlurImage = (isChecked2) => {
        setBlurMatureImg(isChecked2);
        toast.success("changes saved. \u{1F60A}");
        console.log(isChecked2);
        //console.log(BlurMatureImg);
    }
    const handleToggleInFeedAutoplay = (isChecked3) => {
        setAutoplayMedia(isChecked3);
        toast.success("changes saved. \u{1F60A}");
        console.log(isChecked3);
        //console.log(autoplayMedia);
    }
    const handleToggleInFeedCommunityTheme = (isChecked4) => {
        setCommunityTheme(isChecked4);
        toast.success("changes saved. \u{1F60A}");
        console.log(isChecked4);
        //console.log(communityTheme);
    }
    const handleToggleInFeedRememberSort = (isChecked5) => {
        setRememberingSortPerCommunity(isChecked5);
        toast.success("changes saved. \u{1F60A}");
        console.log(isChecked5);
        //console.log(rememberingSortPerCommunity);
    }
    const handleToggleInFeedGlobalView = (isChecked6) => {
        setrememberGlobalView(isChecked6);
        toast.success("changes saved. \u{1F60A}");
        console.log(isChecked6);
        //console.log(globalView);
    }
    const handleToggleInFeedNewTab = (isChecked7) => {
        setOpenPostsInNewTab(isChecked7);
        toast.success("changes saved. \u{1F60A}");
        console.log(isChecked7);
        //console.log(openPostsInNewTab);
    };

    // const getData= () => {
    //     axios.get(`http://localhost:3002/users/4`).then((response) => {
    //         setBlurMatureImg(response.data.blur);
    //         setShowMatureContent(response.data.NSFW);
    //         setAutoplayMedia(response.data.autoPlayVideos);
    //         setCommunityTheme(response.data.communityTheme);
    //         setRememberingSortPerCommunity(response.data.rememberingSortPerCommunity);
    //         setrememberGlobalView(response.data.rememberGlobalView);
    //         setOpenPostsInNewTab(response.data.openPostsInNewTab);

    //     }).catch((error) => {
    //         console.error(error);
    //     })
    // }
    // useEffect(() => {getData()},[]);

    // const handleDataFromSetting = () => {
    //     try{axios.patch(`http://localhost:3002/users/${id}`, { 
    //         blur: blurMatureImg,
    //         NSFW: showMatureContent,
    //         openPostsInNewTab: openPostsInNewTab,
    //         rememberingSortPerCommunity: rememberingSortPerCommunity,
    //         rememberGlobalView: rememberGlobalView,
    //         autoPlayVideos: autoplayMedia,
    //         communityTheme: communityTheme,
    //     })
    //     }catch(error){
    //         console.error(error);
    //     }   
    // }
    // useEffect(() => {
    //     handleDataFromSetting();
    // },[showMatureContent , 
    //     blurMatureImg,
    //     autoplayMedia,
    //     communityTheme,
    //     rememberingSortPerCommunity,
    //     rememberGlobalView,
    //     openPostsInNewTab]);
/** 

    // useEffect(() => {
    //     const handleChangingUserData=()=>{
    //         const updatedPosts = postsForusers.map(postsForuser => ({
    //             ...postsForuser,
    //             blur: blurMatureImg
    //           }));
    //           updatedPosts.forEach(postsForuser => {
    //             axios.patch(`http://localhost:3002/users/${postsForuser.id}`, { blur: postsForuser.blur });
    //           });      
    //     }

    //     handleChangingUserData();
    //     //console.log(postsForusers);
    //     // console.log("2222222222222222222222");
    //     // console.log(updatedPosts);
    //     // console.log("3333333333333333333333");
    //     // console.log(postsForusers);
    //   }, [blurMatureImg]);

    //   useEffect(() => {
    //     axios.get("http://localhost:3002/users/1") //fetch communities and organize into communities array for mapping
    //     .then(response => {
    //       const userPreferences = response.data;
    //       console.log(userPreferences);
    //       setAutoplayMedia(userPreferences.autoPlayVideos);
    //       setBlurMatureImg(userPreferences.blur);
    //       setOpenPostsInNewTab(userPreferences.newTab);
    //       setShowMatureContent(userPreferences.NSFW);
    //       console.log(autoplayMedia);
    //       console.log(blurMatureImg);
    //       console.log(openPostsInNewTab);
    //       console.log(showMatureContent);
    //     })},[]);
        //useEffect(() => {
        //  axios.get("http://localhost:3002/users") 
        //    .then(response => {
        //      const userPreferences = response.data.map(userPreference => ({
        //        name: userPreference.name,  
        //        id: userPreference.id,
        //        blur: userPreference.blur,
        //        NSFW: userPreference.NSFW,
        //        autoPlayVideos: userPreference.autoPlayVideos,
        //        newTab: userPreference.newTab,
        //    }));
        //   console.log(userPreferences);
        //    let tempSettings =[];
        //  for (let i = 0; i < userPreferences.length; i++) {
        //     if(showMatureContent === false){
        //         if (userPreferences[i].NSFW === false) {
        //            tempcomm.push(userPreferences[i]);
        //         }
        //     }else{
        //         tempSettings.push(userPreferences[i]);
        //    }
       
        //    }
           //console.log(tempcomm);
           //setCommunities(tempcomm);
         //console.log(communities);
         //setCommunities(newComms);
         //setLoading(false); //set loading to false after fetching to load body
       // });
    //}, [showMatureContent]);
     
    // useEffect(() => {
    //     console.log(communities);
    // }, [communities]);
*/



    return (
        <div >
            <h1 className=" font-semibold text-xl" role="TextOfButtons">
                Feed settings
            </h1>

            <div className="w-auto grid grid-cols-2 gap-5">
                <div className=" mt-2 w-3/2 md:col-span-1 col-span-2 ">
                <p className="text-xs text-gray-500 mt-9 mb-1" role="TextOfButtons">CONTENT PREFERENCES</p>
                <hr className="w-auto mb-8" />
                    <div className="flex flex-row mb-7 justify-between " role="toggleButton">
                        <div>
                            <p role="TextOfButtons">
                                Show mature (18+) content
                            </p>
                            <br />
                            <p className="text-gray-400 text-wrap text-xs" role="TextOfButtons">
                                See NSFW (Not Safe for Work) mature and adult images, videos, written content, and other media in your Reddit feeds and search results.
                            </p>
                        </div >
                        <ToggleButton onToggle={handleToggleInFeedMatureContent} initial={showMatureContent} />
                    </div>

                    <div className={`${showMatureContent ? '' : 'opacity-50 cursor-not-allowed'} grid grid-columns-2 grid-flow-col mb-7 justify-between`} role="toggleButton">
                        <div>
                            <p role="TextOfButtons">
                                Blur mature images and media
                            </p>
                            <br />
                            <p className="text-gray-400 text-wrap text-xs" role="TextOfButtons">
                                Blur previews and thumbnails for any images or videos tagged as NSFW (Not Safe for Work).
                            </p>
                        </div>
                        <ToggleButton className={`${showMatureContent ? '' : 'opacity-50 cursor-not-allowed'}`} onToggle={handleToggleInFeedBlurImage} initial={blurMatureImg} disabled={!showMatureContent}/>
                    </div>

                    <div className="flex flex-row mb-7 justify-between">
                        <div><div role="TextOfButtons">
                            Autoplay media
                        </div>
                        <br />
                        <div className="text-gray-400 text-wrap text-xs" role="TextOfButtons">
                            Play videos and gifs automatically when in the viewport.
                        </div></div>
                        <div role="toggleButton" >
                            <ToggleButton onToggle={handleToggleInFeedAutoplay} initial={autoplayMedia} />
                        </div>

                    </div>

                    <div className="flex flex-nowrap">
                        <div className="flex flex-row mb-7 flex-wrap" role="TextOfButtons">
                            <p className="mb-4">
                                Community themes
                            </p>
                            <br />
                            <p className="text-gray-400 text-wrap text-xs" role="TextOfButtons">
                                Use custom themes for all communities. You can also turn this off on a per community basis.
                            </p>
                        </div>

                        <div role="toggleButton">
                            <ToggleButton onToggle={handleToggleInFeedCommunityTheme} initial={communityTheme} />
                        </div>
                    </div>

                    <div className="flex flex-nowrap">
                        <div className="flex flex-row mb-7 flex-nowrap">
                            <div><div className="" role="TextOfButtons">
                                Community content sort
                            </div>
                            <br />
                            <div className="text-gray-400 text-wrap text-xs" role="TextOfButtons">
                                Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.
                            </div></div>
                            <Dropdown secondOrFirst={changeContent}/>
                        </div>
                    </div>

                    <div className="flex flex-nowrap ml-8">
                        <div className="flex flex-row mb-7 flex-wrap">
                            <p className="mb-4" role="TextOfButtons">
                                Remember per community
                            </p>
                            <br />
                            <p className="text-gray-400 text-wrap text-xs" role="TextOfButtons">
                                Enable if you would like each community to remember and use the last content sort you selected for that community.
                            </p>
                        </div>
                        <div>
                            <ToggleButton onToggle={handleToggleInFeedRememberSort} initial={rememberingSortPerCommunity}/>
                        </div>
                    </div>

                    <div className="flex flex-nowrap">
                        <div className="flex flex-row mb-7 flex-nowrap">
                            <div><p className="" role="TextOfButtons">
                                Global content view
                            </p>
                            <br />
                            <p className="text-gray-400 text-wrap text-xs" role="TextOfButtons">
                                Choose how you would like content displayed in feeds. This control is also found above your feed.
                            </p></div>
                            <Dropdown secondOrFirst={changeMenuContent}/>
                        </div>
                    </div>

                    <div className="flex flex-nowrap ml-8">
                        <div className="flex flex-row mb-7 flex-wrap">
                            <p className="mb-4" role="TextOfButtons">
                                Remember per community
                            </p>
                            <br />
                            <p className="text-gray-400 text-wrap text-xs" >
                                Enable if you would like each community to remember and use the last content sort you selected for that community.
                            </p>
                        </div>
                        <div role="TextOfButtons">
                            <ToggleButton onToggle={handleToggleInFeedGlobalView} initial={rememberGlobalView}/>
                        </div>
                    </div>

                    <div className="grid grid-rows-2 grid-flow-col gap-1 mb-7 justify-between">
                            <div className="mr-8" role="TextOfButtons">
                                Open posts in new tab
                            </div>
                            <div className="text-gray-400 text-wrap text-xs	" role="TextOfButtons">
                                Enable to always open posts in a new tab.
                            </div>
                        <div role="toggleButton">
                            <ToggleButton onToggle={handleToggleInFeedNewTab} initial={openPostsInNewTab} />
                        </div>
                    </div>
                </div>
            </div>

        </div>)
}