import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContextData } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate()

      const{ registerUser} = useContext(AuthContextData)


    const {handleSubmit,register,formState:{errors},reset,setValue,watch} =useForm()

  
    const role = watch('role')
    const submitHandler = (data)=>{
       const response = registerUser(data)

        if(!response.success){
            toast.error(response.message)
             return
        }
    

      navigate('/login')
        
    }
  return (
    <div className="h-full overflow-hidden bg-[#171717] text-white">
      <div className="relative flex h-full items-center justify-center px-4 py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,68,255,0.25),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(122,68,255,0.12),transparent_26%)]" />

        <div className="relative w-full h-full rounded-[2.5rem] px-6 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:px-10 sm:py-10">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <h1 className="text-6xl font-semibold tracking-tight text-[#cdb7ff] ">MusicHub</h1>
            <p className="mt-1 text-sm text-[#e1d6ff]/85">Join the sound revolution.</p>

            <form onSubmit={handleSubmit(submitHandler)} className="mt-8 w-full h-[80%] rounded-2xl bg-[#201c25]/95 px-4 py-9 shadow-[0_18px_45px_rgba(0,0,0,0.28)] ring-1 ring-white/5 sm:px-5 sm:py-6">
              <div className="grid   grid-cols-2 gap-3">
                <div  onClick={()=>setValue("role","listener")}   className="rounded-xl active:scale-95 border border-[#8a5cf6] bg-[#2b2730] px-4 py-5 text-center shadow-[0_0_0_1px_rgba(138,92,246,0.18)]">
                  <div className="text-2xl text-[#d5c2ff]">♪</div>
                  <div className="mt-1 text-[0.7rem] font-semibold tracking-[0.3em] text-[#d7d0df]">LISTENER</div>
                </div>
         <div onClick={()=>setValue("role","artist")} className={`rounded-xl  active:scale-95 border border-white/10 bg-[#19171b] px-4 py-5 text-center text-[#c7bfda] ${role==='artist'?"bg-purple-500":"border-white/10"}`}>
                  <div className="text-2xl text-[#d9d1ea]">⌇</div>
                  <div className="mt-1 text-[0.7rem] font-semibold tracking-[0.3em] text-[#d7d0df]">ARTIST</div>
                </div>
              </div>

                <input type="hidden" {...register('role')} />
             

              <div className="mt-4 space-y-3 text-left">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                  <span className="text-xl text-[#b7aec4]">◔</span>
                  <input
                    {...register('fullName')}
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                  <span className="text-xl text-[#b7aec4]">@</span>
                  <input
                   {...register('username')}
                    type="text"
                    placeholder="Username"
                    className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                  <span className="text-xl text-[#b7aec4]">✉</span>
                  <input
                   {...register('email')}
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#141316] px-4 py-2.5 shadow-inner shadow-black/30">
                    <span className="text-xl text-[#b7aec4]">⌂</span>
                    <input
                     {...register('password')}
                      type="password"
                      placeholder="Password"
                      className="w-full bg-transparent text-sm text-[#e6dfef] placeholder:text-[#aba2b7] focus:outline-none"
                    />
                  </div>
                
                </div>
              </div>

          

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#d8b8ff_0%,#7d3ff2_100%)] px-5 py-3 text-sm font-semibold text-[#2a1343] shadow-[0_12px_30px_rgba(125,63,242,0.4)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Register <span className="text-xl">→</span>
              </button>

              <p className="mt-4 text-center text-sm text-[#c3bbce]">
                Already have an account? <span className="font-semibold text-[#d8c8ff]">Login</span>
              </p>
            </form>

            <div className="mt-14 flex items-center gap-6 text-[#47424f]">
              <span className="text-2xl">◫</span>
              <span className="text-2xl">⌂</span>
              <span className="text-2xl">▤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register