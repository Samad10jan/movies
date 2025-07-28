export default function Layout({ children }) {
    return (
   
      <div className=" text-center bg-[url('https://i.pinimg.com/originals/26/dd/a8/26dda8aa75f0ba059ac2b23286b0fc06.jpg')] h-screen  " >
            
            <div className="flex flex-col justify-around items-center gap-15  ">
         

            <div>{children}</div>
            
            </div>
            </div>
            

            

         
      
   
  );
}