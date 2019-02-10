import React from "react";
import Slider from "react-slick";


class SimpleSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
    };
  };

  componentDidMount(){
    fetch(`/method/photos.getAll?count=10&access_token=a6afefaa25ea8c7660df7d04fd6ed29b5838a80aab54890d57a4547951b5c074d87146954c044995c8b9c&user_id=17366009&v=5.52`)
      .then(res => res.json())
      .then(photos => {
        console.log(photos); 
        this.setState({
          data: photos.response.items, 
        });  
      });   
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1   
    };

    const {data} = this.state;
    console.log(data);
   
    return (
      <div className="container" >
        <Slider {...settings} > 
            {data.map((photo,id) => <img src={photo.photo_604} alt="фото" key={id} className="slider-item" /> )}
        </Slider>
      </div>
      
    );
  };  
};

export default SimpleSlider;