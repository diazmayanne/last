let process = {
	menu:function(){
		// let source_vid = 'https://www.youtube.com/watch?v=d-P7YUSKbpQ';
		    // <iframe src={source_vid} width="100%" height='300px'/>
		let content =

 			<div>
			<ul>
      <br/>
      <br/>
        <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
      <br/>
      <br/>
				<li><a href='#' onClick={process.page1}><img src='img/front.JPG' width='5px' /> Menu 1</a></li>
				<li><a href='#' onClick={process.page2}><img src='img/front.JPG' width='5px' /> Menu 2</a></li>
				<li><a href='#' onClick={process.page3}><img src='img/front.JPG' width='5px' /> Menu 3</a></li>
				<li><a href='#' onClick={process.page4}><img src='img/front.JPG' width='5px' /> Menu 4</a></li>
				<li><a href='#' onClick={process.page5}><img src='img/front.JPG' width='5px' /> Menu 5</a></li>
				<li><a href='#' onClick={process.page6}><img src='img/front.JPG' width='5px' /> Menu 6</a></li>
				<li><a href='#' onClick={process.page7}><img src='img/front.JPG' width='5px' /> Menu 7</a></li>
				<li><a href='#' onClick={process.page8}><img src='img/front.JPG' width='5px' /> Menu 8</a></li>
        <li><a href='#' onClick={process.page9}><img src='img/front.JPG' width='5px' /> Menu 9</a></li>
        <li><a href='#' onClick={process.page10}><img src='img/front.JPG' width='5px' /> Menu 10</a></li>
        <li><a href='#' onClick={process.page11}><img src='img/front.JPG' width='5px' /> Menu 11</a></li>
     <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
      </ul>
        
			</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},

  aud1:function(){

    let content = process.audio('audio_a1').play();  

  },

	aud2:function(){
    let content = process.audio('audio_b1').play(); 

  },

	page1:function(){
		let content = <div>
				<audio id="audio_a1">
        <source src="shape/circle.mp3" type="audio/mp3"/>
        <audio id="audio_b1">
        <source src="color/gray.mp3" type="audio/mp3"/>
				</audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
				<img src='img/circle.png' width='100px'/><br/>  
        <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div> 
        <br/>
				<br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
			</center>
      </div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	 
	},
	page2:function(){
		let content = <div>
				<audio id="audio_a1">
        <source src="shape/heart.mp3" />"/>
        <audio id="audio_b1">
        <source src="color/red.mp3" type="audio/mp3"/>
				</audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
				<img src='img/heart.png' width='100px'/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
				<br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
			</center>
      </div>;
			ReactDOM.render(content,document.getElementById('root'));
	
		
	},
	page3:function(){
		let content = <div>
        <audio id="audio_a1">
        <source src="shape/diamond.mp3" />"/>
        <audio id="audio_b1">
        <source src="color/purple.mp3" type="audio/mp3"/>
        </audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <img src='img/diamond.JPG' width='100px'/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
        <br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
      </center>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  
	},
	page4:function(){
		  let content = <div>
        <audio id="audio_a1">
        <source src="shape/hexagon.mp3"/>
        <audio id="audio_b1">
        <source src="color/black.mp3" type="audio/mp3"/>
        </audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <img src='img/hexagon.jpg' width='100px'/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
        <br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
      </center>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
   

},
    page5:function(){
    let content = <div>
        <audio id="audio_a1">
        <source src="shape/octagon.mp3" type="audio/mp3"/>
        <audio id="audio_b1">
        <source src="color/white.mp3" type="audio/mp3"/>
        </audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <img src='img/octagon.gif' width='100px'/><br/>   
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
        <br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
      </center>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));

  },
  page6:function(){
    let content = <div>
        <audio id="audio_a1">
        <source src="shape/oval.mp3" />
        <audio id="audio_b1">
        <source src="color/yellow.mp3" type="audio/mp3"/>
        </audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <img src='img/oval.JPG' width='100px'/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
        <br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
      </center>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
   
    
  },
  page7:function(){
    let content = <div>
        <audio id="audio_a1">
        <source src="shape/pentagon.mp3" />
        <audio id="audio_b1">
        <source src="color/brown.mp3" type="audio/mp3"/>
        </audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <img src='img/pentagon.JPG' width='100px'/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
        <br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
      </center>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
   
  },
  page8:function(){
      let content = <div>
        <audio id="audio_a1">
        <source src="shape/rectangle.mp3" />
        <audio id="audio_b1">
        <source src="color/blue.mp3" type="audio/mp3"/>
        </audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <img src='img/rectangle.JPG' width='100px'/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
        <br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/><br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
      </center>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  

    },
  page9:function(){
      let content = <div>
        <audio id="audio_a1">
        <source src="shape/square.mp3" />
        <audio id="audio_b1">
        <source src="color/green.mp3" type="audio/mp3"/>
        </audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <img src='img/square.JPG' width='100px'/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
        <br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
      </center>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  

    },
  page10:function(){
      let content = <div>
        <audio id="audio_a1">
        <source src="shape/star.mp3" />
        <audio id="audio_b1">
        <source src="color/pink.mp3" type="audio/mp3"/>
        </audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <img src='img/star.png' width='100px'/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
        <br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
      </center>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
    

    },
  page11:function(){
      let content = <div>
        <audio id="audio_a1">
        <source src="shape/triangle.mp3" />
        <audio id="audio_b1">
        <source src="color/orange.mp3" type="audio/mp3"/>
        </audio>
        </audio>
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <img src='img/triangle.JPG' width='100px'/>
           <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
        <br/>
        <br/>
        <button className='button' onClick={process.aud1}> Shape </button>
        <button className='button' onClick={process.aud2}> Color </button><br/><br/>
        <a href='#' className='button' onClick={process.menu}>back</a>
      </center>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));



	},
	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
             <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
					<div align='center'>
						<img src='img/front.JPG' width='100px'/>
            <div className="progressbar-infinite color-multi"></div>
               <div className="progressbar-infinite color-multi"></div>
        <div className="progressbar-infinite color-multi"></div>
					</div>;
				</div>;

		ReactDOM.render(content,document.getElementById('root'));
	
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio('audio').addEventListener('ended',function(){
			 process.audio('audio').pause();
			process.audio('audio').play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	// process.audio('audio').pause();
	process.menu();
},5000);