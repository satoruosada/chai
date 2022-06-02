document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side');
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val);
    }

    get observers() {
        return this._observers;
    }

    _init() {
        // new MobileMenu();
        // this.hero = new HeroSlider('.swiper-container');
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._scrollInit();
    }

    _inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview');
        }else {
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    _sideAnimation(el, inview) {
        if(inview) {
            this.sides.forEach(side => side.classList.add('inview'));
        } else {
            this.sides.forEach(side => side.classList.remove('inview'));
        }
    }

    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _toggleSlideAnimation(el, inview) {
        if(inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    _destroyObservers() {
        this.observers.forEach(ob => {
            ob.destroy();
        });
    }

    destroy() {
        this._destroyObservers();
    }

    _scrollInit() {
        this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false});
        this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
        this.observers = new ScrollObserver('.appear', this._inviewAnimation);
        this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation, {rootMargin: "-200px 0px"});
        // this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once: false});
        // this.observers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), {once: false, rootMargin: "-300px 0px"});
    }
}


// フッタースクロールボタン
$(function() {
    // 変数にクラスを入れる
    var btn = $('.button');
  
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 100) {
        btn.addClass('active');
      }else{
        btn.removeClass('active');
      }
    });
  
    //フッターの手前でボタンを止める
    $(window).on('load scroll', function(){
      var height = $(document).height(), //ドキュメントの高さ
          position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
          footer = $('footer').height(); //フッターの高さ
      if ( height - position  < footer ){
        btn.addClass('absolute');
      } else {
        btn.removeClass('absolute');
      }
    });
    
    //スクロールしてトップへ戻る
    btn.on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      });
    });
  });


// aタグスムーズスクロール
  $(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
       // スクロールの速度
       var speed = 400; // ミリ秒
       // アンカーの値取得
       var href= $(this).attr("href");
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });

