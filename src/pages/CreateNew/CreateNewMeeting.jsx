import { Switch } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

const CreateNewMeeting = () => {
    let cameraStream= null;
    const videoRef = useRef();

    const startCamera = async () => {
        try {
          cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = cameraStream;
          }
        } catch (error) {
          console.error('Error accessing camera:', error);
        }
      };
    
      const stopCamera = () => {
        if (cameraStream) {
          const tracks = cameraStream.getTracks();
          tracks.forEach(track => {
            console.log(track);
            track.stop()
          });
    
          if (videoRef.current) {
            videoRef.current.srcObject = null;
          }
        }
      };

      useEffect(()=> {
        startCamera();

      }, [])

  return (
    <div className="max-w-[600px] w-full mx-auto mt-12">
      <video className="h-full w-full rounded-lg" autoPlay ref={videoRef}>
      </video>
      <div className="flex justify-center items-center gap-2 mt-5">
        <h1>Video</h1>{" "}
        <Switch
          onChange={(e)=>e.target.checked? startCamera(e.target.checked):stopCamera(e.target.checked)}
          id="video"
          defaultChecked={true}
          ripple={false}
          className="h-full w-full checked:bg-[#325283]"
          containerProps={{
            className: "w-11 h-6",
          }}
          circleProps={{
            className: "before:hidden left-0.5 border-none ",
          }}
        />
        <h1 className="ml-5">Audio</h1>{" "}
        <Switch
          id="audio"
          defaultChecked={true}
        //   onChange={(e)=>handleAudio(e.target.checked)}
          ripple={false}
          className="h-full w-full checked:bg-[#325283]"
          containerProps={{
            className: "w-11 h-6",
          }}
          circleProps={{
            className: "before:hidden left-0.5 border-none ",
          }}
        />
      </div>
    </div>
  );
};

export default CreateNewMeeting;
