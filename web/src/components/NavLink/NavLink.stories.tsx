import NavLink from './NavLink'

const props = {
  name: 'Home',
  path: '/',
  onClose: () => {
    console.log('onClose')
  },
}

export const normal = () => {
  return <NavLink {...props} />
}

export default { title: 'Components/NavLink' }
