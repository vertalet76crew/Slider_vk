import React from "react";
import Slider from "react-slick";


class SimpleSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
    };
    
  }
  
  componentDidMount(){
    const accessToken = this.props.accessToken;
    fetch(`/method/photos.getAll?count=10&access_token=${accessToken}&user_id=17366009&v=5.52`)
      .then(res => res.json())
      .then(photos => {
        console.log(photos); 
        this.setState({
          data: photos.response.items, 
        });  
      });   
  };

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1   
    };

    const {data} = this.state;
    
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