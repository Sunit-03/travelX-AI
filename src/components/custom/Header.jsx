import React, { useEffect,useState } from 'react'
import { Button } from '../ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { TbLogout2 } from "react-icons/tb";
import { Dialog, DialogContent, DialogDescription } from '@radix-ui/react-dialog';
import { DialogHeader } from '../ui/dialog';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
  

function Header() {
    const [openDialog, setOpenDialog] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'))
    const login = useGoogleLogin({
        onSuccess: (codeResp) => getUserProfile(codeResp),
        onError: (error) => console.log(error),
      });
    useEffect(()=>{
        console.log(user)
    },[])
    const getUserProfile = (tokenInfo) => {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: `application/json`,
              },
            }
          )
          .then((resp) => {
            console.log(resp);
            localStorage.setItem("user", JSON.stringify(resp.data));
            setOpenDialog(false);
            window.location.reload()
          });
      };
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <a href="/">
            <img src="/Logo.png" alt="" height={45} width={170}/>
        </a>
        <div>
            {user?
            <div className='flex items-center gap-5'>
                <a href="/create-trip">
                    <Button variant='outline'>+ Create New</Button>
                </a>
                <a href="/my-trips">
                    <Button variant='outline'>My trips</Button>
                </a>
                <Popover>
                    <PopoverTrigger>
                        <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' alt={user.given_name} />
                    </PopoverTrigger>
                    <PopoverContent>
                        <h2 onClick={()=>{
                            googleLogout()
                            localStorage.clear()
                            window.location.reload();
                            
                        }}className='cursor-pointer flex items-center gap-2'>
                            <TbLogout2 />Logout
                        </h2>
                    </PopoverContent>
                </Popover>

            </div>:<Button onClick={()=>setOpenDialog(true)}>Sign In</Button>
            }
        </div>
        <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/Logo.png" width="170" height={50} />
              <h2 className="font-bold text-lg mt-7">Sign in with google</h2>
              <p>Sign in to the app with google auth</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-5 w-5" />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default Header