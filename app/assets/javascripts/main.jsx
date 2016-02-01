import Index from './components/Index'

let documentReady = () => {
  let reactNode = document.getElementById('react')
  if (reactNode) {
    React.render( <Index />, reactNode)
  }
}

$(documentReady)
