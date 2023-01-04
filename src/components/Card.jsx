import { MdLocationOn } from 'react-icons/md';

export default function Card(props) {
  return (
    <section className='card'>
      <img src={props.item.imageUrl} className='card-img' />
      <section className='card-info'>
        <section className='location-info'>
          <span className='location-icon'>
            {' '}
            <MdLocationOn />
          </span>
          <span className='location'>{props.item.location}</span>
          <div className='google-maps-link'>
            <a href={props.item.googleMapsUrl} target='_blank'>
              View on Google Maps
            </a>
          </div>
        </section>{' '}
        <h2 className='title'>{props.item.title}</h2>
        <span className='start-end-dates'>
          {props.item.startDate} - {props.item.endDate}
        </span>
        <p className='card-description'>{props.item.description}</p>
        <div className='line'></div>
      </section>
    </section>
  );
}
