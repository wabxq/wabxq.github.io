~function () {
            if (window['BAIDU_VIDEO_FROAD_FILL'] ) return;
            window['BAIDU_VIDEO_FROAD_FILL_RENDERFRAME'] = function renderFrame (id, self) {
                    var doc = self.contentWindow.document;
                    doc.open();
                    doc.write('<!DOCTYPE html><head><script src="https://gss0.baidu.com/6qVSsjikBxIFlNKl8IuM_a/pc_static/open/m2.js?v=2017020810"><\/script>\
                        <style>html,body{padding:0;margin:0; width:100%; height:100%}</style></head><body>');
                        doc.write('<script>window["__VIDEO_SITE__"] = "schflash";\
                        window["advPlayComplete"] = parent["advPlayComplete"];\
                        BAIDU_CLB_fillSlot("'+ id +'");\
                        setTimeout(function(){if(!document.getElementById("videoFrontAdvContianer")){window["advPlayComplete"]();}}, 100);<\/script></body></html>');
                  //  doc.close();
                }
            window['BAIDU_VIDEO_FROAD_FILL'] = function init(adv, elem) {

                var elem = document.getElementById(elem);
                var id = 'adframe_wrap_' + Math.floor(Math.random() * 2147483648).toString(32);
                elem.innerHTML = ('<iframe id="' + id
                        + '" src="about:blank" onload="BAIDU_VIDEO_FROAD_FILL_RENDERFRAME('+adv+', this)" width="100%" height="100%" style="margin:0 auto 0"'
                        + ' allowTransparency="true" scrolling="no" marginwidth="0" '
                        + 'marginheight="0" frameborder="0" style="border:0px;"></iframe>');
            }
        }();