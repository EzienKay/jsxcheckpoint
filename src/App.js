import Card from 'react-bootstrap/Card';
import Image from './component/Image';
import Name from './component/Name';
import Description from './component/Description';
import Price from './component/Price';

const App = () => {
    const myName = 'Kola Kelly';
  return (
    <>
        <div style={{display: 'flex', justifyContent:'center', marginBlock: 30, }}>
            <Card style={{ width: '25rem', borderRadius: 8, boxShadow: '0px 0px 4px 6px rgba(128, 128, 128, 0.4)' }}>
                <Image />
                <Card.Body style={{paddingInline: 30}}>
                    <Card.Title> <Name /></Card.Title>
                    <Card.Text>
                    <Description />
                    </Card.Text> 
                    <Price />       
                </Card.Body>
            </Card>            
        </div>
        <div style={{fontWeight: 700, marginBottom: 30, textAlign:'center'}}>
                 {(myName !== 0) ? "Hello " + myName : 'Hello there' }
        </div>
        
    </>
  )
}

export default App