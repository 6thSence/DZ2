var main = (function(){    var init = function () {        _setUpListners();        $('#info__text').columnize({ columns: 2 });        //$('#select-bar').select2();        $('#select-bar').select2({            placeholder: "Select a State",            allowClear: true        });    };    var _setUpListners = function() {        $('#list-1').on('click', _sort_1);        $('#list-2').on('click', _sort_2);        $('#list-3').on('click', _sort_3);        $('#filter-off_1').on('click', _clearCheckbox);        $('#filter-off_3').on('click', _clearCheckbox);        $('.trigger').on('click', _accordionStart);        $('.min-pick').on('click', _galleryStart);    };    var _galleryStart = function(e) {        e.preventDefault();        var            $this = $(this),            item = $this.closest('.slider__item'),            container = $this.closest('.wrapper-inner__gallery'),            display = container.find('.main-pick'),            path = item.find('img').attr('src'),            duration = 300;        if (!item.hasClass('active')){            item.addClass('active').siblings().removeClass('active');            display.find('img').fadeOut(duration, function (){                $(this).attr('src',path).fadeIn(duration);            });        }    }    var _accordionStart = function (e) {        e.preventDefault();        var $this = $(this),            item = $this.closest('.product-settings__item'),            list = $this.closest('.product-settings__list'),            items = list.find('.product-settings__item'),            content = item.find('.inner-item'),            otherContent = list.find('.inner-item'),            otherTrigger = list.find('.trigger'),            duration = 300;        if( !item.hasClass('active')) {            items.removeClass('active');            item.addClass('active');            otherContent.stop(true,true).slideUp(duration);            content.stop(true,true).slideDown(duration);        } else {            item.removeClass('active');            content.stop(true,true).slideUp(duration);        };        if ($this.hasClass('trigger_open')) {            otherTrigger.removeClass('trigger_open').addClass('trigger_close');            $(this).removeClass('trigger_open').addClass('trigger_close');        } else {            otherTrigger.removeClass('trigger_open').addClass('trigger_close');            $this.removeClass('trigger_close').addClass('trigger_open');        }    }    var _clearCheckbox = function (e) {        e.preventDefault();        var $this = $(this),            form = $this.parent(form),            elements = form.find('input').removeAttr("checked");    }    var _sort_1 = function (){        $('#list-1').addClass('sort-bar__item_1_active');        $('#list-2').removeClass('sort-bar__item_2_active');        $('#list-3').removeClass('sort-bar__item_3_active');        $('#var').addClass('var-1').removeClass('var-2').removeClass('var-3')    }    var _sort_2 =  function (){        $('#list-2').addClass('sort-bar__item_2_active');        $('#list-1').removeClass('sort-bar__item_1_active');        $('#list-3').removeClass('sort-bar__item_3_active');        $('#var').addClass('var-2').removeClass('var-1').removeClass('var-3')    }    var _sort_3 = function (){        $('#list-3').addClass('sort-bar__item_3_active');        $('#list-2').removeClass('sort-bar__item_2_active');        $('#list-1').removeClass('sort-bar__item_1_active');        $('#var').addClass('var-3').removeClass('var-2').removeClass('var-1')    }    return {        init: init    };})();main.init();