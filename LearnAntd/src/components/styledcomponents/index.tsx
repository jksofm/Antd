import React from 'react'
import styled from 'styled-components'
import { Button as AntButton, ButtonProps } from 'antd'
// ///// Overide Attribues
// const Input = styled.input.attrs<{ $size?: string }>((props) => ({
//   type: 'text',
//   $size: props.$size || '1em'
// }))`
//   border: 2px solid #bf4f74;
//   margin: ${(props) => props.$size};
//   padding: ${(props) => props.$size};
// `

// // Input's attrs will be applied first, and then this attrs obj
// const PasswordInput = styled(Input).attrs({
//   type: 'password'
// })`
//   // similarly, border will override Input's border
//   border: 2px solid aqua;
// `
// function LearnStyledComponents() {
//   return (
//     <div>
//       <Input placeholder='Input' $size='2em' />
//       <br />
//       <PasswordInput placeholder='PasswordInput' $size='3em' />
//     </div>
//   )
// }

//Pass Props
// Create an Input component that'll render an <input> tag with some styles

const Button: React.FunctionComponent<
  ButtonProps & {
    $background?: string
  }
> = styled(AntButton)<{ $background?: string }>`
  margin-top: 24px;
  margin-left: 30px;
  padding: 2rem 4rem;
  background: ${(props) => props.$background || 'palevioletred'};
  /* box-sizing: border-box; */
  height: auto;
`
const Input = styled.input<{ $inputColor?: string }>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || '#BF4F74'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`
function LearnStyledComponents() {
  return (
    <div>
      <Input defaultValue='@probablyup' type='text' />
      <Input defaultValue='@geelen' type='text' $inputColor='rebeccapurple' />
      <Button $background='blue' type='primary'>
        test
      </Button>
      <Button type='primary'>test</Button>
    </div>
  )
}

export default LearnStyledComponents
