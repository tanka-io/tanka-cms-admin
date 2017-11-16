<template>
    <ckeditor v-model="thisContent" :config="config" @blur="onBlur($event)" @focus="onFocus($event)">
    </ckeditor>
</template>

<script>
import Ckeditor from "vue-ckeditor2";

export default {
  components: { Ckeditor },
  props: {
    content: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      config: {
        toolbar: [
          {
            name: "document",
            items: [
              "Source",
              "-",
              "Save",
              "NewPage",
              "Preview",
              "Print",
              "-",
              "Templates"
            ]
          },
          {
            name: "clipboard",
            items: [
              "Cut",
              "Copy",
              "Paste",
              "PasteText",
              "PasteFromWord",
              "-",
              "Undo",
              "Redo"
            ]
          },
          {
            name: "editing",
            items: ["Find", "Replace", "-", "SelectAll", "-", "Scayt"]
          },
          {
            name: "forms",
            items: [
              "Form",
              "Checkbox",
              "Radio",
              "TextField",
              "Textarea",
              "Select",
              "Button",
              "ImageButton",
              "HiddenField"
            ]
          },
          "/",
          {
            name: "basicstyles",
            items: [
              "Bold",
              "Italic",
              "Underline",
              "Strike",
              "Subscript",
              "Superscript",
              "-",
              "CopyFormatting",
              "RemoveFormat"
            ]
          },
          {
            name: "paragraph",
            items: [
              "NumberedList",
              "BulletedList",
              "-",
              "Outdent",
              "Indent",
              "-",
              "Blockquote",
              "CreateDiv",
              "-",
              "JustifyLeft",
              "JustifyCenter",
              "JustifyRight",
              "JustifyBlock",
              "-",
              "BidiLtr",
              "BidiRtl",
              "Language"
            ]
          },
          { name: "links", items: ["Link", "Unlink", "Anchor"] },
          {
            name: "insert",
            items: [
              "Image",
              "Flash",
              "Table",
              "HorizontalRule",
              "Smiley",
              "SpecialChar",
              "PageBreak",
              "Iframe"
            ]
          },
          "/",
          { name: "styles", items: ["Styles", "Format", "Font", "FontSize"] },
          { name: "colors", items: ["TextColor", "BGColor"] },
          { name: "tools", items: ["Maximize", "ShowBlocks"] },
          { name: "about", items: ["About"] }
        ]
      },
      thisContent:this.content
    };
  },
  methods: {
    onBlur(editor) {
        this.$emit('change',this.thisContent)
    },
    onFocus(editor) {
      //   console.log(editor);
    }
  }
};
</script>