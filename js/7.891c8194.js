(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"4a10":function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-scroll-observer",{on:{scroll:a.onScroll}})},n=[],r={name:"PageScrollPositionHandler",props:{listen:{type:Boolean},page:{type:String,required:!0},extra:{type:Object,default:()=>{}}},methods:{onScroll(a){["up","down"].includes(a.direction)&&this.listen&&(this.$emit("scroll",a.position),this.$store.dispatch("quran/setPageScrollPosition",{page:this.page,offsetTop:a.position,extra:this.extra}))}}},i=r,o=e("2877"),l=e("ed5e"),c=e("eebe"),h=e.n(c),u=Object(o["a"])(i,s,n,!1,null,null,null);t["a"]=u.exports;h()(u,"components",{QScrollObserver:l["a"]})},"6c4e":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"quran-search-by-ayah"},[e("page-scroll-position-handler",{attrs:{listen:!a.init,page:a.page}}),e("q-header",{ref:"header",staticClass:"bg-transparent"},[e("q-toolbar",{ref:"toolbar",staticClass:"bg-white text-black q-py-sm"},[e("q-btn",{attrs:{icon:"arrow_back",flat:"",round:"",dense:""},on:{click:function(t){return a.$router.go(-1)}}}),e("q-item",{staticClass:"q-py-sm q-px-sm"},[e("q-item-section",[e("q-item-label",[a._v("Pencarian Ayat")]),e("q-item-label",{attrs:{caption:""}},[a._v("\n            Cari berdasarkan potongan ayat\n          ")])],1)],1)],1),e("q-separator")],1),e("div",{staticClass:"content bg-white",style:a.contentStyles},[e("div",{staticClass:"q-px-md q-pt-md q-pb-sm bg-grey-1"},[e("div",{staticClass:"row"},[e("q-input",{staticClass:"col-grow q-mr-sm",attrs:{type:"search",placeholder:a.inputFocusReady?"":"Masukkan kata kunci...","input-class":["q-px-sm",{"text-right":a.inputFocusReady}],dir:a.inputFocusReady?"rtl":"ltr",rounded:"",outlined:"",dense:"",clearable:"",dark:!1,"bg-color":"white"},on:{focus:function(){return a.inputFocus=!0},blur:function(){return a.inputFocus=!1}},scopedSlots:a._u([a.inputFocusReady?{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"spellcheck"}})]},proxy:!0}:null],null,!0),model:{value:a.keyword,callback:function(t){a.keyword=t},expression:"keyword"}}),e("q-btn",{attrs:{rounded:"",unelevated:"",color:"primary",icon:"search"},on:{click:a.onSearch}})],1),e("div",{staticClass:"row items-start"},[e("q-toggle",{model:{value:a.fullMatchSearch,callback:function(t){a.fullMatchSearch=t},expression:"fullMatchSearch"}}),e("div",{staticClass:"row q-pt-sm"},[e("div",{staticClass:"text-body1"},[a._v("Pencarian penuh kata")]),e("div",{staticClass:"row items-center text-primary q-ml-sm cursor-pointer",on:{click:function(t){a.fullMatchSearchDialog=!0}}},[e("q-icon",{attrs:{name:"contact_support"}}),e("span",{staticClass:"text-caption q-ml-xs"},[a._v("Info")])],1)])],1)]),a.keywordSearch?a._e():e("div",{staticClass:"column items-center q-pa-lg"},[e("q-icon",{staticClass:"text-grey-8",attrs:{name:"auto_stories",size:"60px"}}),e("p",{staticClass:"text-center text-body1 text-grey-7 q-mt-md"},[a._v("\n        Masukkan kata kunci pencarian dalam tulisan arab untuk mulai mencari.\n      ")])],1),a.keywordSearch&&!a.$store.state.quran.loading.searchAyah?[0==a.searchResults.length?e("div",{staticClass:"column items-center q-pa-lg"},[e("q-icon",{staticClass:"text-grey-8",attrs:{name:"blur_on",size:"60px"}}),e("p",{staticClass:"text-center text-body1 text-grey-7 q-mt-md"},[a._v("\n          Tidak dapat menemukan ayat dengan kata kunci\n          "),e("span",{staticClass:"text-primary"},[a._v(a._s(a.keywordSearch))]),a._v(". Silahkan coba dengan kata kunci yang lain.\n        ")])],1):0==a.searchPaging.total||a.fullMatchSearch?a._e():e("p",{staticClass:"text-center text-body1 text-primary q-pa-lg",staticStyle:{"line-height":"18px"}},[a._v("\n        Berhasil menemukan\n        "),e("span",{staticClass:"text-bold"},[a._v(a._s(a.searchPaging.total))]),a._v("\n        ayat"),e("br"),a._v("dengan kata kunci\n        "),e("span",{staticClass:"text-bold"},[a._v(a._s(a.keywordSearch))])])]:a._e(),a.searchResults.length>0?e("q-list",{attrs:{separator:""}},a._l(a.searchResults,(function(t){return e("q-item",{key:t.verse_id,staticClass:"q-pt-md",attrs:{clickable:""}},[e("q-item-section",[e("div",{on:{click:function(e){return a.showDetail(t)}}},[e("q-item-label",{staticClass:"text-arabic text-right"},[e("span",{domProps:{innerHTML:a._s(t.text)}}),e("span",{staticClass:"text-arabic-number q-mr-xs",domProps:{innerHTML:a._s(a.arabicNumber(t.ayahNumber))}})]),e("q-item-label",{staticClass:"q-pt-sm translation-wrap"},[e("span",[a._v(a._s(t.ayahNumber+". "))]),e("span",{domProps:{innerHTML:a._s(a.getTranslation(t.verse_key))}})])],1),e("q-item-label",{staticClass:"row q-py-sm translation-wrap"},[e("span",{staticClass:"col-grow"},[a._v("\n              QS. "+a._s(t.surahName+": "+t.ayahNumber)+"\n            ")]),e("q-btn",{staticClass:"self-end",attrs:{icon:"more_vert",color:"grey-3","text-color":"black",size:"xs",round:"",dense:"",unelevated:""},on:{click:function(e){return a.onOptionClicked(t)}}})],1)],1)],1)})),1):a._e(),a.$store.state.quran.loading.searchAyah?e("quran-search-result-skeleton"):a._e(),a.isLoadMoreAvailable?e("div",{staticClass:"q-py-md row justify-center"},[e("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"Lebih Banyak"},on:{click:function(t){return a.onLoadMore()}}})],1):a._e(),a.isLoadMoreAvailable||0==a.searchResults.length?a._e():e("p",{staticClass:"text-grey text-center q-py-md"},[a._v("\n      Sudah ditampilkan semua\n    ")])],2),e("ayah-options-dialog",{attrs:{show:a.showAyahOptionsDialog,"ayah-number":a.ayahOptionsDialogData.ayahNumber,"surah-name":a.ayahOptionsDialogData.surahName,arabic:a.ayahOptionsDialogData.arabic,translation:a.ayahOptionsDialogData.translation},on:{"update:show":function(t){a.showAyahOptionsDialog=t}}}),e("q-dialog",{model:{value:a.fullMatchSearchDialog,callback:function(t){a.fullMatchSearchDialog=t},expression:"fullMatchSearchDialog"}},[e("q-card",[e("q-card-section",{staticClass:"row items-center q-pb-none"},[e("div",{staticClass:"text-h6 row items-center"},[e("q-icon",{attrs:{name:"contact_support"}}),e("span",{staticClass:"q-ml-xs"},[a._v("Pencarian penuh kata")])],1),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),e("q-card-section",[e("p",[a._v("\n          Secara default, proses pencarian akan mencari kecocokan setiap kata\n          pada kata kunci yang diberikan. Misalnya dengan kata kunci\n          "),e("b",[a._v("من طين")]),a._v(", maka akan mencari ayat yang mengandung kata\n          "),e("b",[a._v("من")]),a._v(" atau "),e("b",[a._v("طين")]),a._v(".\n        ")]),e("p",[a._v("\n          Apabila fitur "),e("b",[a._v("pencarian penuh kata")]),a._v(" diaktifkan, maka hanya\n          akan mencari ayat yang persis mengandung kata "),e("b",[a._v("من طين")]),a._v(".\n        ")])])],1)],1),e("to-top")],1)},n=[],r=e("ded3"),i=e.n(r),o=e("2f62"),l=e("18d6"),c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"quran-search-result-skeleton"},[e("q-list",{staticClass:"bg-white rounded-borders"},a._l(10,(function(t){return e("div",{key:t},[e("q-item",{staticClass:"q-py-md",attrs:{clickable:""}},[e("q-item-section",[e("q-item-label",[e("q-skeleton",{attrs:{type:"text",height:"30px"}}),e("q-skeleton",{attrs:{type:"text",height:"30px",width:"75%"}})],1),e("q-item-label",{attrs:{caption:""}},[e("q-skeleton",{attrs:{type:"text",width:"30%"}})],1)],1)],1),10!=t?e("q-separator"):a._e()],1)})),0)],1)},h=[],u=e("2877"),p=e("1c1c"),d=e("66e5"),m=e("4074"),y=e("0170"),g=e("293e"),b=e("eb85"),k=e("eebe"),v=e.n(k),q={},f=Object(u["a"])(q,c,h,!1,null,null,null),w=f.exports;v()(f,"components",{QList:p["a"],QItem:d["a"],QItemSection:m["a"],QItemLabel:y["a"],QSkeleton:g["a"],QSeparator:b["a"]});var S=e("fb63"),_=e("a661"),x=e("4a10"),C={name:"QuranSearchByAyah",components:{QuranSearchResultSkeleton:w,AyahOptionsDialog:S["a"],ToTop:_["a"],PageScrollPositionHandler:x["a"]},data(){return{init:!0,page:"quran-search-by-ayah",keyword:"",keywordSearch:"",inputFocus:!1,fullMatchSearch:this.$store.state.quran.searchAyah.fullMatch,fullMatchSearchDialog:!1,contentStyles:null,showAyahOptionsDialog:!1,ayahOptionsDialogData:{ayahNumber:"",surahName:"",arabic:"",translation:""}}},meta(){return{title:this.pageTitle}},watch:{fullMatchSearch(a){this.$store.dispatch("quran/setFullMatchSearch",a),this.onSearch()}},computed:i()(i()({},Object(o["b"])({searchResults:"quran/getSearchAyahResults",searchResultTranslations:"quran/getSearchAyahResultTranslations",searchPaging:"quran/getSearchAyahPaging"})),{},{isLoadMoreAvailable(){return this.searchPaging.currentPage<this.searchPaging.totalPage},inputFocusReady(){return this.keyword||this.inputFocus},pageTitle(){return"Pencarian Ayat | "+(this.keywordSearch?this.keywordSearch+" | ":"")+this.productName}}),methods:{getScrollPosition(){var a,t;return null!==(a=null===(t=this.$store.getters["quran/getPageScrollPosition"](this.page))||void 0===t?void 0:t.offsetTop)&&void 0!==a?a:0},fitContentHeight(){const a=this.$refs.header.$el.clientHeight+"px";this.contentStyles={minHeight:`calc(100vh - ${a})`}},saveLastKeyword(){l["a"].set("search-keyword",this.keywordSearch)},getLastKeyword(){return l["a"].getItem("search-keyword")},onSearch(){this.$store.dispatch("quran/resetSearchAyahPaging"),this.$store.dispatch("quran/resetSearchAyahResults"),this.keywordSearch=this.keyword,this.keywordSearch&&this.search()},search(a){this.track(this.pageTitle),this.saveLastKeyword(),this.$store.dispatch("quran/searchByAyah",{keyword:this.keywordSearch,page:a}).then((a=>{console.log(a)})).catch((a=>{console.log(a)}))},onLoadMore(){this.search(this.searchPaging.currentPage+1)},showDetail(a){this.$router.push({name:"QuranReaderDetail",params:{surahId:a.surahId,verseKey:a.surahId+":"+a.ayahNumber}})},getTranslation(a){var t;return null===(t=this.searchResultTranslations.find((t=>t.verse_key==a)))||void 0===t?void 0:t.text},onOptionClicked(a){this.ayahOptionsDialogData={ayahNumber:a.ayahNumber,surahName:a.surahName,arabic:a.text,translation:this.getTranslation(a.verse_key)},this.showAyahOptionsDialog=!0}},mounted(){this.track(this.pageTitle),this.fitContentHeight(),this.$nextTick((()=>{window.scrollTo(0,this.getScrollPosition()),this.init=!1})),this.searchResults.length>0&&(this.keywordSearch=this.getLastKeyword(),this.keyword=this.getLastKeyword())}},Q=C,D=e("e359"),P=e("65c6"),N=e("9c40"),T=e("27f9"),$=e("0016"),M=e("9564"),O=e("24e8"),A=e("f09f"),L=e("a370"),R=e("2c91"),I=e("7f67"),j=Object(u["a"])(Q,s,n,!1,null,null,null);t["default"]=j.exports;v()(j,"components",{QHeader:D["a"],QToolbar:P["a"],QBtn:N["a"],QItem:d["a"],QItemSection:m["a"],QItemLabel:y["a"],QSeparator:b["a"],QInput:T["a"],QIcon:$["a"],QToggle:M["a"],QList:p["a"],QDialog:O["a"],QCard:A["a"],QCardSection:L["a"],QSpace:R["a"]}),v()(j,"directives",{ClosePopup:I["a"]})},a661:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"to-top"},[e("q-scroll-observer",{on:{scroll:a.onScroll}}),e("q-page-sticky",{staticStyle:{"z-index":"10"},attrs:{position:"bottom-right",offset:[18,18]}},[e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a.show?e("q-btn",{attrs:{color:"primary",icon:"expand_less","fab-mini":""},on:{click:function(t){return a.toTop()}}}):a._e()],1)],1)],1)},n=[],r={name:"ToTop",data(){return{show:!1}},methods:{onScroll(a){a.position>900?this.show=!0:this.show=!1},toTop(){const a=document.getElementsByTagName("body")[0];this.scrollToElement(a)}}},i=r,o=e("2877"),l=e("ed5e"),c=e("de5e"),h=e("9c40"),u=e("eebe"),p=e.n(u),d=Object(o["a"])(i,s,n,!1,null,null,null);t["a"]=d.exports;p()(d,"components",{QScrollObserver:l["a"],QPageSticky:c["a"],QBtn:h["a"]})},fb63:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.showDialog?e("q-dialog",{model:{value:a.showDialog,callback:function(t){a.showDialog=t},expression:"showDialog"}},[e("q-card",{staticClass:"bg-primary",staticStyle:{width:"80vw"}},[e("q-card-section",{staticClass:"row items-center text-white"},[e("div",{staticClass:"text-h6"},[a._v("Ayat "+a._s(a.ayahNumber))]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),e("q-list",{staticClass:"bg-white",attrs:{separator:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return a.copy("ayah")}}},[e("q-item-section",[a._v("\n          Salin ayat\n        ")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return a.copy("translation")}}},[e("q-item-section",[a._v("\n          Salin terjemahan\n        ")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return a.copy("both")}}},[e("q-item-section",[a._v("\n          Salin ayat dan terjemahan\n        ")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return a.bookmark()}}},[e("q-item-section",[a._v("\n          Bookmark\n        ")])],1)],1)],1)],1):a._e()},n=[],r=e("cdde"),i={name:"AyahOptionsDialog",props:{show:{type:Boolean,default:!1},surahName:{type:String,required:!0},ayahNumber:{type:[Number,String],required:!0},arabic:{type:String,required:!0},translation:{type:String,required:!0}},data(){return{showDialog:!1}},watch:{show:{immediate:!0,handler(a){this.showDialog=a}},showDialog(a){this.$emit("update:show",a)}},methods:{copy(a){let t;"ayah"==a?t=this.arabic:"translation"==a?t=this.translation:"both"==a&&(t=this.arabic+"\n\n"+this.translation),t+="\n\n",t+=`QS. ${this.surahName}: ${this.ayahNumber}`,t=this.removeFootNote(t),Object(r["a"])(t).then((()=>{this.$q.notify({type:"toast",message:"Berhasil disalin."})})).catch((()=>{this.$q.notify({type:"toast-error",message:"Gagal! Terjadi kesalahan."})}))},bookmark(){this.$q.notify({type:"toast-warning",message:"Maaf fitur ini belum tersedia."})}}},o=i,l=e("2877"),c=e("24e8"),h=e("f09f"),u=e("a370"),p=e("2c91"),d=e("9c40"),m=e("1c1c"),y=e("66e5"),g=e("4074"),b=e("7f67"),k=e("714f"),v=e("eebe"),q=e.n(v),f=Object(l["a"])(o,s,n,!1,null,null,null);t["a"]=f.exports;q()(f,"components",{QDialog:c["a"],QCard:h["a"],QCardSection:u["a"],QSpace:p["a"],QBtn:d["a"],QList:m["a"],QItem:y["a"],QItemSection:g["a"]}),q()(f,"directives",{ClosePopup:b["a"],Ripple:k["a"]})}}]);