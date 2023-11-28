//TODO 'this' references the OBJECT that is executing the current function

// method -> obj
// function -> global ( window, global )

const video = {
    title: 'a',
    play(){
        console.log( this );
    }
};

video.stop = function(){
    console.log( this );
}

video.play();
video.stop();

function playVideo(){
    console.log( this );
}

playVideo();

function Video( title ){
    this.title = title;
    console.log( this );
}

const v = new Video( 'b' );

const anotherVideo = {
    title: 'c',
    tags: [ 'a', 'b', 'c' ],
    showTags(){
        this.tags.forEach(( tag ) => {
            console.log(this.title, tag );
        })
    }
}

anotherVideo.showTags();