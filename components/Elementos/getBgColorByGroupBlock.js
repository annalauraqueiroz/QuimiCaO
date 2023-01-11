const bgColor = (props) => {
 
    switch(props.groupBlock){
      case 'Ametal':
        return '#76ED69';
      case 'Metal alcalino':
        return '#EB984E';
      case 'Metal alcalino-terroso':
        return '#F4D03F';
      case 'Metal de transição':
        return '#EC7063';
      case 'Metal':
        return '#73C6B6';
      case 'SemiMetal':
        return '#85C1E9';
      case 'Halogênio':
        return '#17A589';
      case 'Gás nobre':
        return '#A569BD';
      case 'Lantanídeo':
        return '#40E0D0';    
      case 'Actinídeo' :
        return'#CCCCFF';
    }
  }
export default bgColor;