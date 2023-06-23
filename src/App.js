import Card from 'react-bootstrap/Card';
import Image from './component/Image';
import Name from './component/Name';
import Description from './component/Description';
import Price from './component/Price';

const App = () => {
  return (
    <>
        <div style={{display: 'flex', justifyContent:'center', marginTop: 30}}>
            <Card style={{ width: '25rem' }}>
                <Image />
                <Card.Body>
                    <Card.Title> <Name /></Card.Title>
                    <Card.Text>
                    <Description />
                    </Card.Text> 
                    <Price />       
                </Card.Body>
            </Card>
        </div>
        
    </>
  )
}

export default App