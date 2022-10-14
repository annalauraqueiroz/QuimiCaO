export default function FetchElemento(props){

    const [carregando, setCarregando] = useState(true);
    const [dados, setDados] = useState([])
    useEffect(
        () =>{
            fetch('d'+ props.elemento)
            .then((response) => response.json())
            .then( json => {
                
                setDados(json);
      })
      .catch((error)=> console.error(error))
      .finally(()=>setCarregando(false))
      }, []
    )
}