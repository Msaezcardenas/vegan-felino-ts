import './Button.css';

interface Props {
  label: string;
  parentMethod: () => void;
}

// si yo uso {parentMethod} - uso la referencia en memoria de ese objeto que ya existe
// es importante trabajar asi en REACT por el uso de memoria
// {()=> parentMethod()}  le estoy diciendo que cada que hago click creo una funcion que ejecuta la funcion del padre
export const Button = ({ label, parentMethod }: Props) => {
  return (
    <button className='custom-button' onClick={parentMethod}>
      {label}
    </button>
  );
};
