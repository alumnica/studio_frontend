$(document).ready(function () {
    $(".block").draggable({
        revert: "invalid",
        cursor: "grab",
        containment: '#ovc',
        // snap: '#dpp',
        // snapMode: "inner",
        // snapTolerance: 50,
        helper: "clone",
    });

    $(".dropzone").droppable({
        activeClass: "dropOn",
        hoverClass: "drop-hover",
        accept: ".block",
        drop: function (event, ui) {
            var theDrag = ui.draggable;


            theDrag.children('.return-button').remove();

            ui.draggable.detach().appendTo($(this));
            var blockId = ui.draggable.attr("id"),
                blockId = blockId.split("-").pop();


            var closBtnContent = ('<div class="return-button" block-val="ob-' + blockId + '"><i class="fa fa-times"></i></div>')

            ui.draggable.append(closBtnContent)
            $(this).droppable('option', 'accept', ui.draggable);
        },
        out: function (event, ui) {
            $(this).droppable('option', 'accept', '.block');
        }
    });
    //copy to shadow block
    $('.oda-block').each(function () {
        var shadowContent = $('.block', this).html();
        $('.shadow-block', this).append(shadowContent);

    })
    $('.block').each(function () {
        var attr = $(this).attr('data-n');

        // For some browsers, `attr` is undefined; for others,
        // `attr` is false.  Check for both.
        if (typeof attr !== typeof undefined && attr !== false) {
            var blockId = $(this).attr("id"),
                blockId = blockId.split("-").pop();

            var closBtnContent = ('<div class="return-button" block-val="ob-' + blockId + '"><i class="fa fa-times"></i></div>')

            $(this).append(closBtnContent);

            var theBlocknum = $(this).attr('data-n');
            var theBlock = $('#' + theBlocknum);
            $(this).appendTo(theBlock);
            theBlock.droppable('option', "disabled", true);
            $(this).on("mousedown", function () {
                theBlock.droppable("option", "disabled", false);
            });
        }
    });
    $('.block').on('click', '.return-button', function(){
        var sendId = $(this).parent().attr('id').split("-").pop();
		// $(this).parent().parent().droppable("option", "disabled", false);
		$(this).parent().parent().droppable('option', 'accept', '.block');
        $(this).parent().appendTo('#ob-'+sendId);
        $(this).remove();
    }); 
});