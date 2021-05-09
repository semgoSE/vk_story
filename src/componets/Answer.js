import React from 'react';
import { Cell, Card, Counter, Button } from '@vkontakte/vkui';
import { render } from 'react-dom';

const style= {
     borderRadius:'30%',
     borderColor:'black'
}

const Answer = ({answer, next, go}) =>(
          <Card size='l'>
            <div style={style}>
             <Cell onClick={go} asideContent={<Counter mode={next == null || next == 0 ? "prominent":"primary"}>{next == null || next == 0 ? '!':next}</Counter>} multiline style={{textAlign:'left'}}>{answer}</Cell>    
            </div>
        </Card>

        )

export default Answer;