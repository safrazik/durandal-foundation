define(['knockout', 'durandal/binder', 'jquery'], function(ko, binder, $){

	var iconic = IconicJS(); // use the global version of iconic library, because the AMD version has some issues
    var originalBinding = binder.binding;

    binder.binding = function(obj, view, instruction) {
    	$(view).find('[zf-iconic]').each(function(){
    		$(this).addClass('iconic');
            var that = this;
            iconic.inject(this);
    	});
    	originalBinding(obj, view, instruction);
    };

  	return {};
})