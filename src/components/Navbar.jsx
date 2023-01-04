import { TiWorld } from 'react-icons/ti';

export default function Navbar() {
  return (
    <navbar className='navbar'>
      <span className='world-icon'>
        <TiWorld />
      </span>
      <span className='navbar-header'>my travel journey.</span>
    </navbar>
  );
}
