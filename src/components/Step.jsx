
export const Step = ({children, label, step, stepAction }) => {
  return (
    <>
        <div className={`step-${step} relative pb-16 animate__animated animate__fadeIn w-full m-auto`}>
            <div className="flex items-center gap-3 pb-5">
                <div className={`dot ${ step >= 2 && 'dot-top' } w-[30px] h-[30px] bg-indigo-500 rounded-full flex justify-center items-center text-white`}>{ step }</div>
                <span className="font-bold text-indigo-500">{ label }</span>
            </div>
            <div className="content pt-3">
                { children }
            </div>
        </div> 
    </>
  )
}