export default function Caixa(props: any) {
  return (
        <div className={`
            flex justify-center items-center
            bg-purple-400 rounded-md p-2
            w-64 h-64 text-5xl font-thin
        `}>
            {props.children}
        </div>
    );
}
