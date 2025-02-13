import { Container } from "./Container"

export const DrawerContainer = ({ children }) => {
  return (
    <>
       <div className="grid grid-cols-2 min-h-screen magicpattern">
            <div className="p-10 z-10">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quidem ut aperiam consequuntur maxime nihil. Minus, enim facere possimus ut fuga ad quos, molestias asperiores necessitatibus quae vitae nesciunt! Reiciendis itaque fuga explicabo laudantium cum, accusantium assumenda vel ipsam doloribus officiis amet possimus quos, maxime minus voluptatibus atque distinctio praesentium voluptas totam tempora ratione? Reiciendis, veritatis. Dolorum, sint? Deserunt, a voluptates animi, quo unde vel, nihil suscipit perspiciatis excepturi nemo recusandae quae perferendis quaerat voluptatibus accusantium eligendi? Nostrum necessitatibus quia deserunt repellendus sint quo quidem incidunt, illum ut dolorum? Eligendi, fuga odio! Quam quae velit totam eligendi est dicta doloremque.</p>
            </div>
            <div className="w-full p-10 flex justify-center items-center h-full z-10">
              {/* <img src="https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" /> */}
              <h1 className="text-center font-bold text-7xl text-balance">Lorem ipsum dolor sit.</h1>
            </div>
        </div>
    </>
  )
}