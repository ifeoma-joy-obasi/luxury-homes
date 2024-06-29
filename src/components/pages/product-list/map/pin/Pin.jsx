import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { PRODUCTLIST} from '../../../../constants';

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-5 cursor-pointer">
          <img
            src={item.img}
            className="max-w-[64px] min-h-[48px] object-cover rounded-md italic"
            alt={item.title}
          />
          {/* text container */}
          <div className="flex flex-col justify-between font-montserrat">
            <Link to={`/${PRODUCTLIST}/${item.id}`} className="font-palanquin">
              {item.title}
            </Link>
            <span>
              {item.bedroom} {item.bedroom > 1 ? "bedrooms" : "bedroom"}
            </span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin