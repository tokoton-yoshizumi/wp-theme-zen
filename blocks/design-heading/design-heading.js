(function (blocks, element, blockEditor, components) {
  var el = element.createElement;
  var RichText = blockEditor.RichText;
  var InspectorControls = blockEditor.InspectorControls;
  var PanelBody = components.PanelBody;
  var SelectControl = components.SelectControl;
  var FontSizePicker = blockEditor.FontSizePicker;
  var withColors = blockEditor.withColors;
  var PanelColorSettings = blockEditor.PanelColorSettings;

  blocks.registerBlockType("mytheme/design-heading", {
    title: "デザイン見出し",
    icon: "heading",
    category: "zen",
    attributes: {
      content: {
        type: "string",
        source: "html",
        selector: "h2",
      },
      fontSize: {
        type: "number",
      },
      textColor: {
        type: "string",
      },
      backgroundColor: {
        type: "string",
      },
      styleClass: {
        type: "string",
        default: "default-style",
      },
    },

    edit: withColors(
      "textColor",
      "backgroundColor"
    )(function (props) {
      function onChangeContent(newContent) {
        props.setAttributes({ content: newContent });
      }
      function onStyleChange(newStyle) {
        props.setAttributes({ styleClass: newStyle });
      }

      return [
        el(
          InspectorControls,
          null,
          el(
            PanelBody,
            { title: "設定", initialOpen: true },
            el(FontSizePicker, {
              value: props.attributes.fontSize,
              onChange: (value) => props.setAttributes({ fontSize: value }),
            }),
            el(PanelColorSettings, {
              title: "カラー設定",
              colorSettings: [
                {
                  value: props.attributes.textColor,
                  onChange: (value) =>
                    props.setAttributes({ textColor: value }),
                  label: "テキストカラー",
                },
                {
                  value: props.attributes.backgroundColor,
                  onChange: (value) =>
                    props.setAttributes({ backgroundColor: value }),
                  label: "背景カラー",
                },
              ],
            }),
            el(SelectControl, {
              label: "スタイル",
              value: props.attributes.styleClass,
              options: [
                { label: "デフォルト", value: "default-style" },
                { label: "ベタ塗り", value: "solid-style" },
                { label: "下線", value: "underline-style" },
                { label: "上下線", value: "lines-style" },
              ],
              onChange: onStyleChange,
            })
          )
        ),
        el(
          "h2",
          {
            className: props.className + " " + props.attributes.styleClass,
            style: {
              fontSize: props.attributes.fontSize,
              color: props.attributes.textColor,
              backgroundColor: props.attributes.backgroundColor,
            },
          },
          el(RichText, {
            value: props.attributes.content,
            onChange: onChangeContent,
            placeholder: "見出しテキストを入力",
          })
        ),
      ];
    }),

    save: function (props) {
      return el(
        "h2",
        {
          className: props.className + " " + props.attributes.styleClass,
          style: {
            fontSize: props.attributes.fontSize,
            color: props.attributes.textColor,
            backgroundColor: props.attributes.backgroundColor,
          },
        },
        props.attributes.content
      );
    },
  });
})(
  window.wp.blocks,
  window.wp.element,
  window.wp.blockEditor,
  window.wp.components
);
