!function(e){"use strict";e.fn.shopengine__extend_var_swatch_form=function(){return this.each((function(){var t=e(this);t.addClass("swatches-support").on("click",".swatch",(function(a){a.preventDefault();var s=e(this),i=s.closest(".value").find("select"),n=s.attr("data-value");if(!s.hasClass("disabled")){if(i.trigger("focusin"),!i.find('option[value="'+n+'"]').length)return s.siblings(".swatch").removeClass("selected"),i.val("").change(),void t.trigger("shopengine__no_matching_variation",[s]);s.hasClass("selected")?(i.val(""),s.removeClass("selected")):(s.addClass("selected").siblings(".selected").removeClass("selected"),i.val(n)),i.change()}})).on("click",".reset_variations",(function(){t.find(".swatch.selected").removeClass("selected"),t.find(".swatch.disabled").removeClass("disabled")})).on("woocommerce_update_variation_values",(function(){setTimeout((function(){t.find("tbody tr").each((function(){var t=e(this),a=t.find("select").find("option"),s=a.filter(":selected"),i=[];a.each((function(e,t){""!==t.value&&i.push(t.value)})),t.find(".swatch").each((function(){var t=e(this),a=t.attr("data-value");i.indexOf(a)>-1?t.removeClass("disabled"):(t.addClass("disabled"),s.length&&a===s.val()&&t.removeClass("selected"))}))}))}),100)})).on("shopengine__no_matching_variation",(function(){window.alert(wc_add_to_cart_variation_params.i18n_no_matching_variations_text)}))}))},e((function(){setTimeout((()=>{e(".variations_form").shopengine__extend_var_swatch_form()}),500)}));const t=e(".product-type-variable"),a=t.find(".woocommerce-loop-product__link").find(".attachment-woocommerce_thumbnail");t.find(".shopengine_loop_swatches_wrap").length&&a.length&&(e(a).before('<div class="lds-spinner shopengine-swatch-preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'),e(a).before('<div class="preloader-shadow"></div>')),e(".shopengine_loop_swatches_wrap .shopengine_swatches .swatch_color.swatch_color_loop").on("click",(function(){const t=e(this);let a=t.parents(".shopengine_loop_swatches_wrap").attr("data-product-id"),s=[[t.parent().attr("data-attribute_name"),t.attr("data-value")]];t.addClass("selected").siblings().removeClass("selected");let i=!1;if(t.parent().siblings(".shopengine-loop-swatches").each((function(t){e(this).children(".selected").length>0?s.push([e(this).children(".selected").parent().attr("data-attribute_name"),e(this).children(".selected").attr("data-value")]):i=!0})),!i){const i=e(t).parent(".shopengine-loop-swatches").parent(".shopengine_loop_swatches_wrap").siblings(".woocommerce-loop-product__link");let n=i.find(".shopengine-swatch-preloader"),o=i.find(".attachment-woocommerce_thumbnail"),c=i.find(".preloader-shadow"),r=o.innerHeight();e(c).css("height",`${r}`),e(n).css("top",r/2-40),e(window).resize((function(){e(c).css("height",`${r}`),e(n).css("top",r/2-40)})),e.ajax({url:frontendApiSettings.ajaxurl,type:"POST",data:{action:"shopengine_swatch_image_on_loop_products",nonce:frontendApiSettings.nonce,selectedData:s,productId:a},beforeSend:function(e){n.addClass("preloader-active"),c.addClass("overlay-active")},error:function(e){console.log("Error: ",e),n.removeClass("preloader-active"),c.removeClass("overlay-active")},success:function(a){!0===a.success&&function(t,a){let s=(a=e.parseHTML(a))[0].src,i=a[0].srcset;t.parents(".shopengine_loop_swatches_wrap").parents("li.product.type-product.has-post-thumbnail").find("img.attachment-woocommerce_thumbnail.size-woocommerce_thumbnail").attr({src:s,srcset:i}),t.parents(".shopengine_loop_swatches_wrap").parent().siblings(".shopengine-archive-products__left-image").children("a img").attr({src:s,srcset:i})}(t,a.data.variation_img_html)},complete:function(){n.removeClass("preloader-active"),c.removeClass("overlay-active")}})}}))}(jQuery);