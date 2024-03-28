// import Anavbar from "./Anavbar";
import Asidebar from "./Asidebar";
import '../assets/css/ahome.css';
import Cookies from "js-cookie";
function AdminHome() {
  const token=Cookies.get('token');
  console.log('Token:' ,token);
  return (
    <div className="homead">
      <div className="sidebar-contentah">
        <Asidebar />
        <div className="cardSectionad">
          <div className="cardad">
          <div className="card-bodyad">

<p className="desc">Wrop & Wow is your ultimate destination for finding the perfect gifts for every occasion. Whether its a birthday, anniversary, wedding, or any special moment, Wrop & Wow offers a diverse selection of gifts to cater to every preference and budget. From luxurious presents to heartfelt gestures, Wrop & Wow guarantees a seamless and unforgettable gifting experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminHome;
