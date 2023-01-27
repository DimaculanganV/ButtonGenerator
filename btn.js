const containerForSettings = document.querySelector('#container_for_settings');
const mainContainer = document.querySelector('#main_container');

const shadowIcon = document.querySelector('#shadow_icon');
const iconBorder = document.querySelector('#icon-border');

const textInBtn = document.querySelector('#text-in-btn');
const containerForOutputButton = document.querySelector('#container-for-output-button');
// FONT STYLES

// output button
const btnOutput = document.querySelector('#button');
const sizeInput = document.querySelector('#textInputSize');

// source code for disabling the font styles
const disablingCheckboxForFontStyles = document.querySelector('#disabling_checkbox_for_font_styles');
const disablingContainerForFontStyles = document.querySelector('#disabled_font_styles')

// disabling chekcbox for font styles
disablingCheckboxForFontStyles.addEventListener('change', () => {
    if(disablingCheckboxForFontStyles.checked) {
        btnOutput.style.fontFamily = fontStyles.value;
        disablingContainerForFontStyles.style.pointerEvents = 'fill';
        disablingContainerForFontStyles.style.opacity = 1;
        codeForFontFamily.style.visibility = 'visible';
        codeForFontFamily.style.height = 13 + 'px';
        codeForFontFamily.innerHTML = fontStyles.value;
        codeContainerForFontFamily.style.height = 13 + 'px';
        codeContainerForFontFamily.style.visibility = 'visible';
    } else {
        btnOutput.style.fontFamily = 'Arial';
        codeForFontFamily.style.height = 0;
        codeContainerForFontFamily.style.height = 0;
        codeContainerForFontFamily.style.visibility = 'hidden';
        codeForFontFamily.style.visibility = 'hidden';
        disablingContainerForFontStyles.style.pointerEvents = 'none';
        disablingContainerForFontStyles.style.opacity = .8;
    };
});

const fontTextTitle = document.querySelector('#font_text_title');
const fontTextSettings = document.querySelector('#font_text_settings');
const textIcon = document.querySelector('#text_icon');

// dropdown container for text/font
fontTextTitle.addEventListener('click', () => {
    if (fontTextSettings.style.height === '0px') {
        fontTextSettings.style.height = '180px';
        fontTextSettings.style.visibility = 'visible';
        textIcon.innerHTML = 'close'
        shadowSettingsContent.style.height = '0px';
        containerForSettings.style.height = '382px';
        // to close the Shadow settings  
        shadowSettingsContent.style.visibility = 'hidden';
        shadowSettingsContent.style.height = '0px';
        shadowIcon.innerHTML = 'expand_more';
        // to close the border styles
        btnDpBorderSettings.style.visibility = 'hidden';
        btnDpBorderSettings.style.height = '0px';
        iconBordr.innerHTML = 'expand_more';
        // to close the background settings  
        btnContentBackground.style.visibility = 'hidden';
        btnContentBackground.style.height = '0px';
        iconBackground.innerHTML = 'expand_more';
        // to close the more settings in border if open
        mainContainerForBorderStyles.style.visibility = 'hidden';
        mainContainerForBorderStyles.style.height = '0px';
        solidBackgroundColorContainer.style.visibility = 'hidden'; 
        solidBackgroundColorContainer.style.height = '0px'; 
        backgroundGradientContainer.style.visibility = 'hidden';
        backgroundGradientContainer.style.height = '0px'; 
        // to close hover settings
        hoverSettingsContent.style.visibility = 'hidden';
        hoverSettingsContent.style.height = '0px';
        containerToDisabledHoverSettings.style.visibility = 'hidden';
        containerToDisabledHoverSettings.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.visibility = 'hidden';
        containerForHoverSolidBackgroundColor.style.height = '0px';
        containerForHoverSolidBackgroundColor.style.visibility = 'hidden';
        
        // button background "solid and gradient color"
        solidBackgroundColorContainer.style.visibility = 'hidden'; 
        solidBackgroundColorContainer.style.height = '0px'; 
        backgroundGradientContainer.style.visibility = 'hidden';
        backgroundGradientContainer.style.height = '0px';
    } else {
        fontTextSettings.style.height = '0px';
        fontTextSettings.style.visibility = 'hidden';
        textIcon.innerHTML = 'expand_more';
        containerForSettings.style.height = '202px';
    }
});

// TEXT INPUT 
const textInput = document.querySelector('#text_input');
textInput.addEventListener('input', () => {
    btnOutput.innerHTML = textInput.value;
});

const fontStyles = document.querySelector('#font-styles');
const codeForFontFamily = document.querySelector('#code_for_font_styles');
const codeContainerForFontFamily = document.querySelector('#child_container_font_styles');
fontStyles.addEventListener('change', () => {
    btnOutput.style.fontFamily = fontStyles.value;
    codeForFontFamily.innerHTML = fontStyles.value;
});

// FONT COLOR
const codeForFontColor = document.querySelector('#code_for_font_color');
const fontColorPicker = document.querySelector('#font_color_picker');
const fontColorOutput = document.querySelector('#font_color_output');

    fontColorPicker.addEventListener('input', () => {
        btnOutput.style.color = fontColorPicker.value;
        fontColorOutput.value = fontColorPicker.value;
        codeForFontColor.innerHTML = fontColorPicker.value;
    });
    fontColorOutput.addEventListener('input', () => {
        btnOutput.style.color = fontColorOutput.value;
        fontColorPicker.value = fontColorOutput.value;
        codeForFontColor.innerHTML = fontColorOutput.value;
    });

// FONT SIZE
const fontSizeOutput = document.querySelector('#font_size_output');
const fontSizeRange = document.querySelector('#font_size_range');
const codeForFontSize = document.querySelector('#code_for_font_size');
    fontSizeRange.addEventListener('input', () => {
        btnOutput.style.fontSize = fontSizeRange.value + 'px';
        fontSizeOutput.value = fontSizeRange.value;
        codeForFontSize.innerHTML = fontSizeRange.value + 'px';
    }); 
    fontSizeOutput.addEventListener('input', () => {
        btnOutput.style.fontSize = fontSizeOutput.value + 'px';
        fontSizeRange.value = fontSizeOutput.value ;
        codeForFontSize.innerHTML = fontSizeOutput.value + 'px';
    });

// TEXT SHADOW
const textShadowColorOutput = document.querySelector('#text_shadow_color_output');
const textShadowColorPicker = document.querySelector('#text_shadow_color_picker');
const xOutput = document.querySelector('#xOutput');
const xRange = document.querySelector('#xRange');
const yOutput = document.querySelector('#yOutput');
const yRange = document.querySelector('#yRange');
const blurOutput = document.querySelector('#blurOutput');
const blurRange = document.querySelector('#blurRange');
const codeForXTextShadow = document.querySelector('#x_code_for_text_shadow');
const codeForYTextShadow = document.querySelector('#y_code_for_text_shadow');
const codeForBlurTextShadow = document.querySelector('#blur_code_for_text_shadow');
const codeForColorTextShadow = document.querySelector('#color_code_for_text_shadow');
const codeContainerForTextShadow = document.querySelector('#child_container_text_shadow');

// DISABLING CHECKBOX FOR TEXT/FONT SHADOW 
const disablingCheckboxForTextShadow = document.querySelector('#checkbox_for_disabling_textshadow');
const disablingContainerForTextShadow = document.querySelector('#disabling_container_for_textshadow');

disablingCheckboxForTextShadow.addEventListener('change', () => {
    if (disablingCheckboxForTextShadow.checked) {
        disablingContainerForTextShadow.style.opacity = 1;
        disablingContainerForTextShadow.style.pointerEvents = 'fill';
        btnOutput.style.textShadow = `${xOutput.value}px ${yOutput.value}px ${blurOutput.value}px ${textShadowColorOutput.value}`;
        codeContainerForTextShadow.style.visibility = 'visible';
        codeContainerForTextShadow.style.height = 13 + 'px';
        codeForXTextShadow.innerHTML = xOutput.value + 'px';
        codeForYTextShadow.innerHTML = yOutput.value + 'px';
        codeForBlurTextShadow.innerHTML = blurOutput.value + 'px';
        codeForColorTextShadow.innerHTML = textShadowColorOutput.value;
    } else {
        disablingContainerForTextShadow.style.opacity = .8;
        disablingContainerForTextShadow.style.pointerEvents = 'none';
        btnOutput.style.textShadow = 'none';
        codeContainerForTextShadow.style.visibility = 'hidden';
        codeContainerForTextShadow.style.height = 0 + 'px';
    }
});


// funtion for text shadow
xRange.addEventListener('input', shadowTextCol);
yRange.addEventListener('input', shadowTextCol);
blurRange.addEventListener('input', shadowTextCol);
textShadowColorPicker.addEventListener('input', shadowTextCol);
xOutput.addEventListener('input', shadowTextCol);
yOutput.addEventListener('input', shadowTextCol);
blurOutput.addEventListener('input', shadowTextCol);
textShadowColorOutput.addEventListener('input', shadowTextCol);
function shadowTextCol () {
    btnOutput.style.textShadow = `${xOutput.value}px ${yOutput.value}px ${blurOutput.value}px ${textShadowColorOutput.value}`;
};

textShadowColorPicker.addEventListener('input', () => {
    textShadowColorOutput.value = textShadowColorPicker.value;
    codeForColorTextShadow.innerHTML = textShadowColorPicker.value;
});
textShadowColorOutput.addEventListener('input', () => {
    textShadowColorPicker.value = textShadowColorOutput.value;
    codeForXTextShadow.innerHTML = xOutput.value;
});
xRange.addEventListener('input', () => {
    codeForXTextShadow.innerHTML = xOutput.value + 'px';
    xOutput.value = xRange.value;
});
xOutput.addEventListener('input', () => {
    xRange.value = xOutput.value;
    codeForXTextShadow.innerHTML = xOutput.value + 'px';
});
yRange.addEventListener('input', () => {
    codeForYTextShadow.innerHTML = yRange.value + 'px';
    yOutput.value = yRange.value;
});
yOutput.addEventListener('input', () => {
    codeForYTextShadow.innerHTML = yOutput.value + 'px';
    yRange.value = yOutput.value;
});
blurRange.addEventListener('input', () => {
    codeForBlurTextShadow.innerHTML = blurRange.value + 'px';
    blurOutput.value = blurRange.value;
});
blurOutput.addEventListener('input', () => {
    codeForBlurTextShadow.innerHTML = blurOutput.value;
    blurRange.value = blurOutput.value;
});

// "BORDER SHADOW"
// border shadow source
const shadowSettings = document.querySelector('#btn-shadow');
const shadowSettingsContent = document.querySelector('#btn-content-shadow');
const borderShadowOutput = document.querySelector('#boxShadowColOut');
const shadowColorPicker = document.querySelector('#shadowCol');
const xBordrShadOut = document.querySelector('#x_axis_output');
const xBordrShad = document.querySelector('#xAxisRange');
const yBordrShadOut = document.querySelector('#y_axis_output');
const yBordrShad = document.querySelector('#yAxisRange');
const blurBordrShadOut = document.querySelector('#blur_axis_output');
const blurBordrShad = document.querySelector('#blurAxis');

shadowSettings.addEventListener('click', () => {
    if (shadowSettingsContent.style.height === '0px') {
        shadowSettingsContent.style.height = '200px';
        shadowSettingsContent.style.visibility = 'visible';
        shadowIcon.innerHTML = 'close';
        containerForSettings.style.height = '402px';
        // to close the text/font container 
        fontTextSettings.style.height = '0px';
        fontTextSettings.style.visibility = 'hidden';
        textIcon.innerHTML = 'expand_more';
        // to close the border style container 
        btnDpBorderSettings.style.height = '0px';
        btnDpBorderSettings.style.visibility = 'hidden';
        iconBordr.innerHTML = 'expand_more';
        // to close the background style container 
        btnContentBackground.style.height = '0px';
        btnContentBackground.style.visibility = 'hidden';
        iconBackground.innerHTML = 'expand_more';
        // to close the more settings in border if open
        mainContainerForBorderStyles.style.visibility = 'hidden';
        mainContainerForBorderStyles.style.height = '0px';
        // to close hover settings
        hoverSettingsContent.style.visibility = 'hidden';
        hoverSettingsContent.style.height = '0px';
        containerToDisabledHoverSettings.style.visibility = 'hidden';
        containerToDisabledHoverSettings.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.visibility = 'hidden';
        containerForHoverSolidBackgroundColor.style.height = '0px';
        containerForHoverSolidBackgroundColor.style.visibility = 'hidden';
        // button background "solid and gradient color"
        solidBackgroundColorContainer.style.visibility = 'hidden'; 
        solidBackgroundColorContainer.style.height = '0px'; 
        backgroundGradientContainer.style.visibility = 'hidden';
        backgroundGradientContainer.style.height = '0px';
    } else {
        shadowSettingsContent.style.height = '0px';
        shadowSettingsContent.style.visibility = 'hidden';
        shadowIcon.innerHTML = 'expand_more';
        containerForSettings.style.height = '202px';
    }
});

// this function is for the border shadow value 
shadowColorPicker.addEventListener('input', borderShadow);
xBordrShad.addEventListener('input', borderShadow);
yBordrShad.addEventListener('input', borderShadow);
blurBordrShad.addEventListener('input', borderShadow);
borderShadowOutput.addEventListener('input', borderShadow);
xBordrShadOut.addEventListener('input', borderShadow);
yBordrShadOut.addEventListener('input', borderShadow);
blurBordrShadOut.addEventListener('input', borderShadow);
function borderShadow () {
    btnOutput.style.boxShadow = `${xBordrShadOut.value}px ${yBordrShadOut.value}px ${blurBordrShadOut.value}px ${borderShadowOutput.value}`;
}; 

// FUNCTION FOR DISABLING BOX SHADOW
const disablingCheckboxForBoxShadow = document.querySelector('#disabling_checkbox_for_box_shadow');
const disablingContainerForBoxShadow = document.querySelector('#disabling_container_for_box_shadow');

disablingCheckboxForBoxShadow.addEventListener('change', () => {
    if (disablingCheckboxForBoxShadow.checked) {
        disablingContainerForBoxShadow.style.opacity = 1;
        disablingContainerForBoxShadow.style.pointerEvents = 'fill';
        btnOutput.style.boxShadow = `${xBordrShadOut.value}px ${yBordrShadOut.value}px ${blurBordrShadOut.value}px ${borderShadowOutput.value}`;
        codeForXBoxShadow.innerHTML = xBordrShadOut.value + 'px';
        codeForYBoxShadow.innerHTML = yBordrShadOut.value + 'px';
        codeForBlurBoxShadow.innerHTML = blurBordrShadOut.value + 'px';
        codeForColorBoxShadow.innerHTML = borderShadowOutput.value;
        codeContainerForBoxShadow.style.visibility = 'visible';
        codeContainerForBoxShadow.style.height =  13 + 'px';
    } else {
        disablingContainerForBoxShadow.style.opacity = .8;
        disablingContainerForBoxShadow.style.pointerEvents = 'none';
        btnOutput.style.boxShadow = 'none';
        codeContainerForBoxShadow.style.visibility = 'hidden';
        codeContainerForBoxShadow.style.height =  0 + 'px';
    }
});

// this function is for range output
const codeForXBoxShadow = document.querySelector('#x_code_for_box_shadow');
const codeForYBoxShadow = document.querySelector('#y_code_for_box_shadow');
const codeForBlurBoxShadow = document.querySelector('#blur_code_for_box_shadow');
const codeForColorBoxShadow = document.querySelector('#color_code_for_box_shadow');
const codeContainerForBoxShadow = document.querySelector('#child_container_box_shadow');

xBordrShad.addEventListener('input', () => {
    xBordrShadOut.value = xBordrShad.value;
    codeForXBoxShadow.innerHTML = xBordrShad.value + 'px';
});
xBordrShadOut.addEventListener('input', () => {
    codeForXBoxShadow.innerHTML = xBordrShadOut.value + 'px';
    xBordrShad.value = xBordrShadOut.value;
});
yBordrShad.addEventListener('input', () => {
    codeForYBoxShadow.innerHTML = xBordrShad.value + 'px';
    yBordrShadOut.value = yBordrShad.value;
});
yBordrShadOut.addEventListener('input', () => {
    codeForYBoxShadow.innerHTML = xBordrShadOut.value + 'px';
    yBordrShad.value = yBordrShadOut.value;
});
blurBordrShad.addEventListener('input', () => {
    blurBordrShadOut.value = blurBordrShad.value;
    codeForBlurBoxShadow.innerHTML = blurBordrShad.value + 'px';
});
blurBordrShadOut.addEventListener('input', () => {
    codeForBlurBoxShadow.innerHTML = blurBordrShadOut.value + 'px';
    blurBordrShad.value = blurBordrShadOut.value;
});
shadowColorPicker.addEventListener('input', () => {
    codeForColorBoxShadow.innerHTML = shadowColorPicker.value;
    borderShadowOutput.value = shadowColorPicker.value;
});
borderShadowOutput.addEventListener('input', () => {
    codeForColorBoxShadow.innerHTML = borderShadowOutput.value;
    shadowColorPicker.value = borderShadowOutput.value;
});

// border padding settings 
// border padding source code
const paddingForAllSidesOutput = document.querySelector('#paddingAllSide');
const padAllRange = document.querySelector('#paddingRangeAll');
const padTopOut = document.querySelector('#paddingTopOut');
const padTopRange = document.querySelector('#paddingTopRange');
const padLeftOut = document.querySelector('#paddingLeftOut');
const padLeftRange = document.querySelector('#paddingLeftRange');
const padBotOut = document.querySelector('#paddingBotOut');
const padBotRange = document.querySelector('#paddingBotRange');
const padRightOut = document.querySelector('#paddingRightOut');
const padRightRange = document.querySelector('#paddingRightRange');

// padding for all sides
paddingForAllSidesOutput.addEventListener('input', paddingForAllSides)
padAllRange.addEventListener('input', paddingForAllSides)

function paddingForAllSides () {
    btnOutput.style.padding = `${paddingForAllSidesOutput.value}px`;
}
padAllRange.addEventListener('input', () => {
    codeForPadding.innerHTML = `${padAllRange.value}px`;
    paddingForAllSidesOutput.value = `${padAllRange.value}`;
    containerForOutputButton.style.paddingBottom = padAllRange.value + '0.1px';
});
paddingForAllSidesOutput.addEventListener('input', () => {
    padAllRange.value = `${paddingForAllSidesOutput.value}`;
    codeForPadding.innerHTML = `${paddingForAllSidesOutput.value}px` 
    containerForOutputButton.style.height = padAllRange.value + '0.1px';
});

// padding for top side
padTopRange.addEventListener('input', () => {
    btnOutput.style.paddingTop = `${padTopRange.value}px`;
    codeForPaddingTop.innerHTML = padTopRange.value + 'px';
    padTopOut.value = padTopRange.value;
});
padTopOut.addEventListener('input', () => {
    codeForPaddingTop.innerHTML = padTopOut.value + 'px';
    btnOutput.style.paddingTop = `${padTopOut.value}px`;
    padTopRange.value = padTopOut.value;
});
// padding for left side
padLeftRange.addEventListener('input', () => {
    codeForPaddingLeft.innerHTML = padLeftRange.value + 'px';
    btnOutput.style.paddingLeft = `${padLeftRange.value}px`;
    padLeftOut.value = padLeftRange.value;
});
padLeftOut.addEventListener('input', () => {
    codeForPaddingLeft.innerHTML = padLeftOut.value + 'px';
    btnOutput.style.paddingLeft = `${padLeftOut.value}px`;
    padLeftRange.value = padLeftOut.value;
});
// padding for bottom side
padBotRange.addEventListener('input', () => {
    codeForPaddingBottom.innerHTML = padBotRange.value + 'px';
    btnOutput.style.paddingBottom = `${padBotRange.value}px`;
    padBotOut.value = padBotRange.value;
});
padBotOut.addEventListener('input', () => {
    codeForPaddingBottom.innerHTML = padBotOut.value + 'px';
    btnOutput.style.paddingBottom = `${padBotOut.value}px`;
    padBotRange.value = padBotOut.value;
});
// padding for right side
padRightRange.addEventListener('input', () => {
    codeForPaddingRight.innerHTML = padRightRange.value + 'px';
    btnOutput.style.paddingRight = `${padRightRange.value}px`;
    padRightOut.value = padRightRange.value;
});
padRightOut.addEventListener('input', () => {
    codeForPaddingRight.innerHTML = padRightOut.value + 'px';
    btnOutput.style.paddingRight = `${padRightOut.value}px`;
    padRightRange.value = padRightOut.value;
});
// DISABLING CHECKBOX FOR ALL PADDING 
const disablingCheckboxForAllPadding = document.querySelector('#disabling_checkbox_for_all_padding');
const disablingContainerForAllPadding = document.querySelector('#disabling_container_for_all_padding');
const disablingCheckboxForPaddingTop = document.querySelector('#disabling_checkbox_for_padding_top');
const disablingContainerForPaddingTop = document.querySelector('#disabling_container_for_padding_top');
const disablingCheckboxForPaddingLeft = document.querySelector('#disabling_checkbox_for_padding_left');
const disablingContainerForPaddingLeft = document.querySelector('#disabling_container_for_padding_left');
const disablingCheckboxForPaddingBottom = document.querySelector('#disabling_checkbox_for_padding_bottom');
const disablingContainerForPaddingBottom = document.querySelector('#disabling_container_for_padding_bottom');
const disablingCheckboxForPaddingRight = document.querySelector('#disabling_checkbox_for_padding_right');
const disablingContainerForPaddingRight = document.querySelector('#disabling_container_for_padding_right');
const disablingContainerForAllSideOfPadding = document.querySelector('#disabling_all_container_for_sides_of_padding');

const codeForPadding = document.querySelector('#code_for_padding');
const codeForPaddingTop = document.querySelector('#code_for_top_padding');
const codeForPaddingRight = document.querySelector('#code_for_right_padding');
const codeForPaddingBottom = document.querySelector('#code_for_bottom_padding');
const codeForPaddingLeft = document.querySelector('#code_for_left_padding');

const codeContainerForPadding = document.querySelector('#child_container_padding');
const codeContainerForPaddingTop = document.querySelector('#child_container_padding_top');
const codeContainerForPaddingRight = document.querySelector('#child_container_padding_right');
const codeContainerForPaddingBottom = document.querySelector('#child_container_padding_bottom');
const codeContainerForPaddingLeft = document.querySelector('#child_container_padding_left');

disablingCheckboxForAllPadding.addEventListener('change', () => {
    if (disablingCheckboxForAllPadding.checked) {
        disablingContainerForAllPadding.style.opacity = 1;
        disablingContainerForAllPadding.style.pointerEvents = 'fill';
        btnOutput.style.padding = `${padAllRange.value}px`;
        disablingContainerForAllSideOfPadding.style.opacity = .6;
        disablingContainerForAllSideOfPadding.style.pointerEvents = 'none';
        disablingContainerForPaddingTop.style.pointerEvents = 'none';
        disablingContainerForPaddingRight.style.pointerEvents = 'none';
        disablingContainerForPaddingBottom.style.pointerEvents = 'none';
        disablingContainerForPaddingLeft.style.pointerEvents = 'none';
        codeContainerForPadding.style.visibility = 'visible';
        codeContainerForPadding.style.height = 13 + 'px';
        codeForPadding.innerHTML = `${paddingForAllSidesOutput.value}px`;
        codeContainerForPaddingTop.style.visibility = 'hidden';
        codeContainerForPaddingTop.style.height = 0 + 'px';
        codeContainerForPaddingRight.style.visibility = 'hidden';
        codeContainerForPaddingRight.style.height = 0 + 'px';
        codeContainerForPaddingBottom.style.visibility = 'hidden';
        codeContainerForPaddingBottom.style.height = 0 + 'px';
        codeContainerForPaddingLeft.style.visibility = 'hidden';
        codeContainerForPaddingLeft.style.height = 0 + 'px';
    }else {
        btnOutput.style.padding = `${0}px`;
        disablingContainerForAllSideOfPadding.style.opacity = 1;
        disablingContainerForAllSideOfPadding.style.pointerEvents = 'fill';
        disablingContainerForAllPadding.style.opacity = .6;
        disablingContainerForAllPadding.style.pointerEvents = 'none';
        codeContainerForPadding.style.visibility = 'hidden';
        codeContainerForPadding.style.height = 0 + 'px';
        codeContainerForPaddingTop.style.visibility = 'visible';
        codeContainerForPaddingTop.style.height = 13 + 'px';
        codeContainerForPaddingRight.style.visibility = 'visible';
        codeContainerForPaddingRight.style.height = 13 + 'px';
        codeContainerForPaddingBottom.style.visibility = 'visible';
        codeContainerForPaddingBottom.style.height = 13 + 'px';
        codeContainerForPaddingLeft.style.visibility = 'visible';
        codeContainerForPaddingLeft.style.height = 13 + 'px';
    }
});

disablingCheckboxForPaddingTop.addEventListener('change', () => {
    if (disablingCheckboxForPaddingTop.checked) {
        disablingContainerForPaddingTop.style.opacity = 1;
        disablingContainerForPaddingTop.style.pointerEvents = 'fill';
        btnOutput.style.paddingTop = `${padTopOut.value}px`;
        codeContainerForPaddingTop.style.visibility = 'visible';
        codeContainerForPaddingTop.style.height = 13 + 'px';
        codeForPaddingTop.innerHTML = padTopOut.value + 'px'
    } else {
        btnOutput.style.paddingTop = '0px';
        disablingContainerForPaddingTop.style.opacity = .6;
        disablingContainerForPaddingTop.style.pointerEvents = 'none';
        codeContainerForPaddingTop.style.visibility = 'hidden';
        codeContainerForPaddingTop.style.height = 0 + 'px';
    }
});
disablingCheckboxForPaddingLeft.addEventListener('change', () => {
    if (disablingCheckboxForPaddingLeft.checked) {
        disablingContainerForPaddingLeft.style.opacity = 1;
        disablingContainerForPaddingLeft.style.pointerEvents = 'fill';
        btnOutput.style.paddingLeft = `${padLeftOut.value}px`;
        codeContainerForPaddingLeft.style.visibility = 'visible';
        codeContainerForPaddingLeft.style.height = 13 + 'px';
        codeForPaddingLeft.innerHTML = `${padLeftOut.value}px`;
    } else {
        btnOutput.style.paddingLeft = '0px';
        disablingContainerForPaddingLeft.style.opacity = .6;
        disablingContainerForPaddingLeft.style.pointerEvents = 'none';
        codeContainerForPaddingLeft.style.visibility = 'hidden';
        codeContainerForPaddingLeft.style.height = 0 + 'px';
    }   
});
disablingCheckboxForPaddingBottom.addEventListener('change', () => {
    if (disablingCheckboxForPaddingBottom.checked) {
        disablingContainerForPaddingBottom.style.opacity = 1;
        disablingContainerForPaddingBottom.style.pointerEvents = 'fill';
        btnOutput.style.paddingBottom = `${padBotOut.value}px`;
        codeContainerForPaddingBottom.style.visibility = 'visible';
        codeContainerForPaddingBottom.style.height = 13 + 'px';
        codeForPaddingBottom.innerHTML = padBotOut.value + 'px'
    } else {
        btnOutput.style.paddingBottom = '0px';
        disablingContainerForPaddingBottom.style.opacity = .8;
        disablingContainerForPaddingBottom.style.pointerEvents = 'none';
        codeContainerForPaddingBottom.style.visibility = 'hidden';
        codeContainerForPaddingBottom.style.height = 0 + 'px';
    }
});
disablingCheckboxForPaddingRight.addEventListener('change', () => {
    if (disablingCheckboxForPaddingRight.checked) {
        disablingContainerForPaddingRight.style.opacity = 1;
        disablingContainerForPaddingRight.style.pointerEvents = 'fill';
        btnOutput.style.paddingRight = `${padRightOut.value}px`;
        codeContainerForPaddingRight.style.visibility = 'visible';
        codeContainerForPaddingRight.style.height = 13 + 'px';
        codeForPaddingRight.innerHTML = padRightOut.value + 'px'
    } else {
        btnOutput.style.paddingRight = '0px';
        disablingContainerForPaddingRight.style.opacity = .8;
        disablingContainerForPaddingRight.style.pointerEvents = 'none';
        codeContainerForPaddingRight.style.visibility = 'hidden';
        codeContainerForPaddingRight.style.height = 0 + 'px';
    }
});
// border setting for the border of button 
// source code para sa container ng button border
const btnBorder = document.querySelector('#btn-border');
const btnDpBorderSettings = document.querySelector('#btn-content-border-btn');
const iconBordr = document.querySelector('#icon-border');

const codeContainerForBorderRadius = document.querySelector('#child_container_border_radius');
const codeForBorderRadius = document.querySelector('#code_for_border_radius');

btnBorder.addEventListener('click', () => {
    if (btnDpBorderSettings.style.height === '0px') {
        btnDpBorderSettings.style.height = '100px';
        btnDpBorderSettings.style.visibility = 'visible';
        iconBordr.innerHTML = 'close';
        containerForSettings.style.height = '302px';
        // to close the text/font container 
        fontTextSettings.style.height = '0px';
        fontTextSettings.style.visibility = 'hidden';
        textIcon.innerHTML = 'expand_more';
        // to close the shadow container 
        shadowSettingsContent.style.height = '0px';
        shadowSettingsContent.style.visibility = 'hidden';
        shadowIcon.innerHTML = 'expand_more';
        // to close the background style container 
        btnContentBackground.style.height = '0px';
        btnContentBackground.style.visibility = 'hidden';
        iconBackground.innerHTML = 'expand_more';
        solidBackgroundColorContainer.style.visibility = 'hidden'; 
        solidBackgroundColorContainer.style.height = '0px'; 
        backgroundGradientContainer.style.visibility = 'hidden';
        backgroundGradientContainer.style.height = '0px'; 
        // to close hover settings
        hoverSettingsContent.style.visibility = 'hidden';
        hoverSettingsContent.style.height = '0px';
        containerToDisabledHoverSettings.style.visibility = 'hidden';
        containerToDisabledHoverSettings.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.visibility = 'hidden';
        containerForHoverSolidBackgroundColor.style.height = '0px';
        containerForHoverSolidBackgroundColor.style.visibility = 'hidden';
        
        // button background "solid and gradient color"
        solidBackgroundColorContainer.style.visibility = 'hidden'; 
        solidBackgroundColorContainer.style.height = '0px'; 
        backgroundGradientContainer.style.visibility = 'hidden';
        backgroundGradientContainer.style.height = '0px';
    } else {
        iconBorder.innerHTML = 'expand_more';
        btnDpBorderSettings.style.visibility = 'hidden'
        btnDpBorderSettings.style.height = '0px';
        containerForSettings.style.height = '202px';
        // to close the more settings in border if open
        mainContainerForBorderStyles.style.visibility = 'hidden';
        mainContainerForBorderStyles.style.height = '0px';
    }
});

// source code for button border radius 
const borderRadiusOutput = document.querySelector('#borderRadiusOutput');
const borderRadiusRange = document.querySelector('#borderRadiusRange');

borderRadiusRange.addEventListener('input', () => {
    btnOutput.style.borderRadius = borderRadiusRange.value + 'px';
    borderRadiusOutput.value = borderRadiusRange.value;
    codeForBorderRadius.innerHTML = borderRadiusRange.value + 'px';

});
borderRadiusOutput.addEventListener('input', () => {
    btnOutput.style.borderRadius = borderRadiusOutput.value + 'px';
    borderRadiusRange.value = borderRadiusOutput.value;
    codeForBorderRadius.innerHTML = borderRadiusOutput.value + 'px';
});

const disablingCheckboxForBorderRadius = document.querySelector('#disabling_checkbox_for_border_radius');
const disablingContainerForBorderRadius = document.querySelector('#disabling_container_for_border_radius');


disablingCheckboxForBorderRadius.addEventListener('change', () => {
    if (disablingCheckboxForBorderRadius.checked) {
        btnOutput.style.borderRadius = borderRadiusRange.value + 'px' ;
        disablingContainerForBorderRadius.style.opacity = 1;
        disablingContainerForBorderRadius.style.pointerEvents = 'fill';
        codeContainerForBorderRadius.style.visibility = 'visible';
        codeContainerForBorderRadius.style.height = 13 + 'px';
        codeForBorderRadius.innerHTML = borderRadiusOutput.value + 'px';
    } else {
        codeContainerForBorderRadius.style.visibility = 'hidden';
        codeContainerForBorderRadius.style.height = 0 + 'px';
        btnOutput.style.borderRadius = '0px' ;
        disablingContainerForBorderRadius.style.opacity = .8;
        disablingContainerForBorderRadius.style.pointerEvents = 'none';
    }
});

// Start of Disabling Additional Settings for Border
// all additional setting for border(disabling)
const disablingCheckboxForBorderAll = document.querySelector('#disabling_checkbox_for_border');
const disablingContainerForBorderAll = document.querySelector('#disabling_container_for_border');
const disablingContainerForWholeAddtionalSettingsOfBorder = document.querySelector('#disabling_container_for_whole_addtional_settings_of_border');
const disablingCheckboxForBorderTop = document.querySelector('#disabling_checkbox_for_border_top');
const disablingContainerForBorderTop = document.querySelector('#disabling_container_for_border_top');
const disablingCheckboxForBorderRight = document.querySelector('#disabling_checkbox_for_border_right');
const disablingContainerForBorderRight = document.querySelector('#disabling_container_for_border_right');
const disablingCheckboxForBorderBottom = document.querySelector('#disabling_checkbox_for_border_bottom');
const disablingContainerForBorderBottom = document.querySelector('#disabling_container_for_border_bottom');
const disablingCheckboxForBorderLeft = document.querySelector('#disabling_checkbox_for_border_left');
const disablingContainerForBorderLeft = document.querySelector('#disabling_container_for_border_left');
const codeContainerForBorder = document.querySelector('#child_container_border');
const codeContainerForBorderTop = document.querySelector('#child_container_border_top');
const codeContainerForBorderRight = document.querySelector('#child_container_border_right');
const codeContainerForBorderBottom = document.querySelector('#child_container_border_bottom');
const codeContainerForBorderLeft = document.querySelector('#child_container_border_left');

disablingCheckboxForBorderAll.addEventListener('change', () => {
    if (disablingCheckboxForBorderAll.checked) {
        btnOutput.style.borderStyle = borderStyleAll.value;
        disablingContainerForBorderAll.style.opacity = 1;
        disablingContainerForBorderAll.style.pointerEvents = 'fill';
        disablingContainerForWholeAddtionalSettingsOfBorder.style.opacity = .7;
        disablingContainerForWholeAddtionalSettingsOfBorder.style.pointerEvents = 'none';
        btnOutput.style.padding = `${paddingForAllSidesOutput.value}px`;
        codeContainerForBorder.style.visibility = 'visible';
        codeContainerForBorder.style.height = 13 + 'px';
        codeForBorderColor.innerHTML = borderColorPicker.value;
        codeForBorderStyle.innerHTML = borderStyleAll.value;
        btnOutput.style.borderWidth = borderWidthRange.value + 'px';
        codeForBorderWidth.innerHTML = borderWidthOutput.value + 'px';
    } else {
        codeContainerForBorder.style.visibility = 'hidden';
        codeContainerForBorder.style.height = 0 + 'px';
        disablingContainerForWholeAddtionalSettingsOfBorder.style.opacity = 1;
        disablingContainerForWholeAddtionalSettingsOfBorder.style.pointerEvents = 'fill';
        btnOutput.style.borderStyle = 'none' ;
        disablingContainerForBorderAll.style.opacity = .8;
        disablingContainerForBorderAll.style.pointerEvents = 'none';
    }
});

disablingCheckboxForBorderTop.addEventListener('change', ()=> {
    if (disablingCheckboxForBorderTop.checked) {
        disablingContainerForBorderTop.style.opacity = 1;
        disablingContainerForBorderTop.style.pointerEvents = 'fill';
        btnOutput.style.borderTopStyle = borderTopStylesSelectForButton.value;
        codeContainerForBorderTop.style.visibility = 'visible';
        codeContainerForBorderTop.style.height = 13 + 'px';
        codeForBorderTopWidth.innerHTML = borderTopWidthOutput.value + 'px';
        codeForBorderTopStyle.innerHTML = borderTopStylesSelectForButton.value;
        codeForBorderTopColor.innerHTML = borderTopColorOutputForButton.value;
    } else {
        disablingContainerForBorderTop.style.opacity = .7;
        disablingContainerForBorderTop.style.pointerEvents = 'none';
        btnOutput.style.borderTopStyle = 'none';
        codeContainerForBorderTop.style.visibility = 'hidden';
        codeContainerForBorderTop.style.height = 0 + 'px';
    }
});
disablingCheckboxForBorderRight.addEventListener('change', ()=> {
    if (disablingCheckboxForBorderRight.checked) {
        disablingContainerForBorderRight.style.opacity = 1;
        disablingContainerForBorderRight.style.pointerEvents = 'fill';
        btnOutput.style.borderRightStyle = borderRightStyle.value;
        codeContainerForBorderRight.style.visibility = 'visible';
        codeContainerForBorderRight.style.height = 13 + 'px';
        codeForBorderRightStyle.innerHTML = borderRightStyle.value;
        codeForBorderRightColor.innerHTML = borderRightColorOutput.value;
        codeForBorderRightWidth.innerHTML = borderRightWidthOutput.value + 'px';
    } else {
        codeContainerForBorderRight.style.visibility = 'hidden';
        codeContainerForBorderRight.style.height = 0 + 'px';
        disablingContainerForBorderRight.style.opacity = .7;
        disablingContainerForBorderRight.style.pointerEvents = 'none';
        btnOutput.style.borderRightStyle = 'none';
    }
});
disablingCheckboxForBorderBottom.addEventListener('change', ()=> {
    if (disablingCheckboxForBorderBottom.checked) {
        disablingContainerForBorderBottom.style.opacity = 1;
        disablingContainerForBorderBottom.style.pointerEvents = 'fill';
        btnOutput.style.borderBottomStyle = borderBottomStyle.value;
        codeContainerForBorderBottom.style.visibility = 'visible';
        codeContainerForBorderBottom.style.height = 13 + 'px';
        codeForBorderbottomStyle.innerHTML = borderBottomStyle.value;
        codeForBorderbottomColor.innerHTML = borderBottomColorOutput.value;
        codeForBorderbottomWidth.innerHTML = borderBottomWidthOutput.value + 'px';
    } else {
        codeContainerForBorderBottom.style.visibility = 'hidden';
        codeContainerForBorderBottom.style.height = 0 + 'px';
        disablingContainerForBorderBottom.style.opacity = .7;
        disablingContainerForBorderBottom.style.pointerEvents = 'none';
        btnOutput.style.borderBottomStyle = 'none';
    }
});
disablingCheckboxForBorderLeft.addEventListener('change', ()=> {
    if (disablingCheckboxForBorderLeft.checked) {
        disablingContainerForBorderLeft.style.opacity = 1;
        disablingContainerForBorderLeft.style.pointerEvents = 'fill';
        btnOutput.style.borderLeftStyle = borderLeftStyle.value;
        codeContainerForBorderLeft.style.visibility = 'visible';
        codeContainerForBorderLeft.style.height = 13 + 'px';
        codeForLeftStyle.innerHTML = borderLeftStyle.value;
        codeForLeftColor.innerHTML = borderLeftColorOutput.value;
        codeForLeftWidth.innerHTML = borderLeftWidthOutput.value + 'px';
    } else {
        codeContainerForBorderLeft.style.visibility = 'hidden';
        codeContainerForBorderLeft.style.height = 0 + 'px';
        disablingContainerForBorderLeft.style.opacity = .7;
        disablingContainerForBorderLeft.style.pointerEvents = 'none';
        btnOutput.style.borderLeftStyle = 'none';
    }
});
// End of Disabling Additional Settings for Border

// start of border
const borderColorOutput = document.querySelector('#borderColorOutput');
const borderColorPicker = document.querySelector('#borderColorPicker');
const codeForBorderColor = document.querySelector('#code_for_border_color');

borderColorPicker.addEventListener('input', () => {
    btnOutput.style.borderColor = borderColorPicker.value;
    borderColorOutput.value = borderColorPicker.value;
    codeForBorderColor.innerHTML = borderColorOutput.value;
});
borderColorOutput.addEventListener('input', () => {
    btnOutput.style.borderColor = borderColorOutput.value;
    borderColorPicker.value = borderColorOutput.value;
    codeForBorderColor.innerHTML = borderColorOutput.value;
});

const borderStyleAll = document.querySelector('#border_style_all');
const codeForBorderStyle = document.querySelector('#code_for_border_style');
borderStyleAll.addEventListener('change', () => {
    codeForBorderStyle.innerHTML = borderStyleAll.value;
    btnOutput.style.borderStyle = borderStyleAll.value;
});

const borderWidthOutput = document.querySelector('#borderWidthOutput');
const borderWidthRange = document.querySelector('#borderWidthRange');
const codeForBorderWidth = document.querySelector('#code_for_border_width');

borderWidthRange.addEventListener('input', () =>{
    codeForBorderWidth.innerHTML = borderWidthRange.value + 'px';
    btnOutput.style.borderWidth = borderWidthRange.value + 'px';
    borderWidthOutput.value = borderWidthRange.value + 'px';
});
borderWidthOutput.addEventListener('input', () =>{
    codeForBorderWidth.innerHTML = borderWidthOutput.value + 'px';
    btnOutput.style.borderWidth = borderWidthOutput.value + 'px';
    borderWidthRange.value = borderWidthOutput.value + 'px';
});
// end of border    

// source code for "more" settings in button border
const moreSettingsForBorderStyle = document.querySelector('#moreSettingsForBorderStyle');

// source code for additional settings for border style for button
// main container for additional settings for border styles
const mainContainerForBorderStyles = document.querySelector('#main_container_for_additional_settings_for_border_styles');

moreSettingsForBorderStyle.addEventListener('click', () => {
    if (btnDpBorderSettings.style.height === '100px') {
        btnDpBorderSettings.style.height = '350px';
        moreSettingsForBorderStyle.innerHTML = 'hide';
        // to adjust the size of the container
        btnDpBorderSettings.style.height = '490px';
        containerForSettings.style.height = '692px';
        containerForSettings.style.borderBottom = 'none';
        
        // to open the additional settings for border styles
        mainContainerForBorderStyles.style.visibility = 'visible';

        mainContainer.style.height = 140 + 'vh';
        
        solidBackgroundColorContainer.style.visibility = 'hidden'; 
        solidBackgroundColorContainer.style.height = '0px'; 
        backgroundGradientContainer.style.visibility = 'hidden';
        backgroundGradientContainer.style.height = '0px'; 
    } else {
        containerForSettings.style.borderBottom = '1px solid #000';
        btnDpBorderSettings.style.height = '100px';
        moreSettingsForBorderStyle.innerHTML = 'more';
        // to close the additional settings for border styles
        mainContainerForBorderStyles.style.visibility = 'hidden';
        mainContainerForBorderStyles.style.height = '0px';
        mainContainer.style.height = 100 + 'vh';
        
        // to turn back the cointainer size to normal
        containerForSettings.style.height = '302px';
    }
});

/* BORDER-TOP */
// functionality of color of the border-top 
const borderTopColorOutputForButton = document.querySelector('#border_top_color_output_for_button');
const borderTopColorPickerForButton = document.querySelector('#border_top_color_picker_for_button');
const codeForBorderTopColor = document.querySelector('#code_for_border_top_color');

borderTopColorPickerForButton.addEventListener ('input', () => {
    btnOutput.style.borderTopColor = borderTopColorPickerForButton.value;
    borderTopColorOutputForButton.value = borderTopColorPickerForButton.value;
    codeForBorderTopColor.innerHTML = borderTopColorPickerForButton.value;
});
borderTopColorOutputForButton.addEventListener ('input', () => {
    btnOutput.style.borderTopColor = borderTopColorOutputForButton.value;
    borderTopColorOutputForButton.value = borderTopColorOutputForButton.value;
    codeForBorderTopColor.innerHTML = borderTopColorOutputForButton.value;
});

const borderTopStylesSelectForButton = document.querySelector('#border_styles_top');
const codeForBorderTopStyle = document.querySelector('#code_for_border_top_style');

borderTopStylesSelectForButton.addEventListener('change', () => {
    codeForBorderTopStyle.innerHTML = borderTopStylesSelectForButton.value;
    btnOutput.style.borderTopStyle = borderTopStylesSelectForButton.value;
});

const borderTopWidthOutput = document.querySelector('#border_top_width_output_for_button');
const borderTopWidthRange = document.querySelector('#border_top_width_range_for_button');
const codeForBorderTopWidth = document.querySelector('#code_for_border_top_width');
borderTopWidthRange.addEventListener('input', () => {
    btnOutput.style.borderTopWidth = borderTopWidthRange.value + 'px';
    borderTopWidthOutput.value = borderTopWidthRange.value;
    codeForBorderTopWidth.innerHTML = borderTopWidthRange.value + 'px';
});
borderTopWidthOutput.addEventListener('input', () => {
    btnOutput.style.borderTopWidth = borderTopWidthOutput.value + 'px';
    borderTopWidthRange.value = borderTopWidthOutput.value + 'px';
    codeForBorderTopWidth.innerHTML = borderTopWidthOutput.value + 'px';
});
// end of border-top

/* BORDER RIGHT */
const borderRightStyle = document.querySelector('#border_right_styles');
const codeForBorderRightStyle = document.querySelector('#code_for_border_right_style');

borderRightStyle.addEventListener('change', () => {
    btnOutput.style.borderRightStyle = borderRightStyle.value;
    codeForBorderRightStyle.innerHTML = borderRightStyle.value;
});

const borderRightColorOutput = document.querySelector('#border_right_color_output_for_button');
const borderRightColorPicker = document.querySelector('#border_right_color_picker_for_button');
const codeForBorderRightColor = document.querySelector('#code_for_border_right_color');

borderRightColorPicker.addEventListener('input', () => {
    btnOutput.style.borderRightColor = borderRightColorPicker.value;
    borderRightColorOutput.value = borderRightColorPicker.value;
    codeForBorderRightColor.innerHTML = borderRightColorPicker.value;
});
borderRightColorOutput.addEventListener('input', () => {
    btnOutput.style.borderRightColor = borderRightColorOutput.value;
    borderRightColorPicker.value = borderRightColorOutput.value;
    codeForBorderRightColor.innerHTML = borderRightColorOutput.value;
});

const borderRightWidthRange = document.querySelector('#border_right_width_range_for_button')
const borderRightWidthOutput = document.querySelector('#border_right_width_output_for_button')
const codeForBorderRightWidth = document.querySelector('#code_for_border_right_width');
borderRightWidthRange.addEventListener('input', () => {
    btnOutput.style.borderRightWidth = borderRightWidthRange.value + 'px';
    borderRightWidthOutput.value = borderRightWidthRange.value;
    codeForBorderRightWidth.innerHTML = borderRightWidthRange.value + 'px';
});
borderRightWidthOutput.addEventListener('input', () => {
    btnOutput.style.borderRightWidth = borderRightWidthOutput.value + 'px';
    borderRightWidthRange.value = borderRightWidthOutput.value + 'px';
    codeForBorderRightWidth.innerHTML = borderRightWidthOutput.value + 'px';
});
// end of border bottom

/* BORDER BOTTOM */
const borderBottomStyle = document.querySelector('#border_styles_bottom');
const codeForBorderbottomStyle = document.querySelector('#code_for_border_bottom_style');

borderBottomStyle.addEventListener('change', () => {
    btnOutput.style.borderBottomStyle = borderBottomStyle.value;
    codeForBorderbottomStyle.innerHTML = borderBottomStyle.value;
});

const borderBottomColorOutput = document.querySelector('#border_bottom_color_picker_output_for_button');
const borderBottomColorPicker = document.querySelector('#border_bottom_color_picker_for_button');
const codeForBorderbottomColor = document.querySelector('#code_for_border_bottom_color');

borderBottomColorPicker.addEventListener('input', () => {
    borderBottomColorOutput.value = borderBottomColorPicker.value;
    codeForBorderbottomColor.innerHTML = borderBottomColorPicker.value;
    btnOutput.style.borderBottomColor = borderBottomColorPicker.value;
});
borderBottomColorOutput.addEventListener('input', () => {
    borderBottomColorPicker.value = borderBottomColorOutput.value;
    codeForBorderbottomColor.innerHTML = borderBottomColorOutput.value;
    btnOutput.style.borderBottomColor = borderBottomColorOutput.value;
});

const borderBottomWidthOutput = document.querySelector('#border_bottom_width_output_for_button');
const borderBottomWidthRange = document.querySelector('#border_bottom_width_range_for_button');
const codeForBorderbottomWidth = document.querySelector('#code_for_border_bottom_width');

borderBottomWidthRange.addEventListener('input', () => {
    btnOutput.style.borderBottomWidth = borderBottomWidthRange.value + 'px';
    borderBottomWidthOutput.value = borderBottomWidthRange.value;
    codeForBorderbottomWidth.innerHTML = borderBottomWidthRange.value + 'px';
});
borderBottomWidthOutput.addEventListener('input', () => {
    btnOutput.style.borderBottomWidth = borderBottomWidthOutput.value + 'px';
    borderBottomWidthRange.value = borderBottomWidthOutput.value;
    codeForBorderbottomWidth.innerHTML = borderBottomWidthOutput.value + 'px';
});
// end of border bottom

/* BORDER-LEFT */
const borderLeftStyle = document.querySelector('#border_left_styles');
const codeForLeftStyle = document.querySelector('#code_for_border_left_style');

borderLeftStyle.addEventListener('change', () => {
    btnOutput.style.borderLeftStyle = borderLeftStyle.value;
    codeForLeftStyle.innerHTML = borderLeftStyle.value;
});

const borderLeftColorPicker = document.querySelector('#border_left_color_picker_for_button');
const borderLeftColorOutput = document.querySelector('#border_left_color_output_for_button');
const codeForLeftColor = document.querySelector('#code_for_border_left_color');

borderLeftColorPicker.addEventListener('input', () => {
    btnOutput.style.borderLeftColor = borderLeftColorPicker.value;
    borderLeftColorOutput.value = borderLeftColorPicker.value;
    codeForLeftColor.innerHTML = borderLeftColorPicker.value;
});
borderLeftColorOutput.addEventListener('input', () => {
    btnOutput.style.borderLeftColor = borderLeftColorOutput.value;
    borderLeftColorPicker.value = borderLeftColorOutput.value;
    codeForLeftStyle.innerHTML = borderLeftColorOutput.value;
});

const borderLeftWidthRange = document.querySelector('#border_left_width_range_for_button');
const borderLeftWidthOutput = document.querySelector('#border_left_width_output_for_button');
const codeForLeftWidth = document.querySelector('#code_for_border_left_width');

borderLeftWidthRange.addEventListener('input', () => {
    btnOutput.style.borderLeftWidth = borderLeftWidthRange.value + 'px';
    borderLeftWidthOutput.value = borderLeftWidthRange.value;
    codeForLeftWidth.innerHTML = borderLeftWidthRange.value + 'px';
});
borderLeftWidthOutput.addEventListener('input', () => {
    codeForLeftWidth.innerHTML = borderLeftWidthOutput.value + 'px';
    btnOutput.style.borderLeftWidth = borderLeftWidthOutput.value + 'px';
    borderLeftWidthRange.value = borderLeftWidthOutput.value + 'px';
});

/* BACKGROUND COLOR FOR BUTTON */
// SOURCE CODE FOR BACKGROUND 
const backgroundDropdown = document.querySelector('#btn-background');
const btnContentBackground = document.querySelector('#btn-content-background');
const iconBackground = document.querySelector('#icon-background');

backgroundDropdown.addEventListener('click', () => {

    if (btnContentBackground.style.height == '0px') {
        btnContentBackground.style.height = '120px';
        btnContentBackground.style.visibility = 'visible';
        iconBackground.innerHTML = 'close';
        containerForSettings.style.height = '322px';
        // to close the text/font settings  
        fontTextSettings.style.visibility = 'hidden';
        fontTextSettings.style.height = '0px';
        textIcon.innerHTML = 'expand_more';
        // to close the Shadow settings  
        shadowSettingsContent.style.visibility = 'hidden';
        shadowSettingsContent.style.height = '0px';
        shadowIcon.innerHTML = 'expand_more';
        // to close the border styles
        btnDpBorderSettings.style.visibility = 'hidden';
        btnDpBorderSettings.style.height = '0px';
        iconBordr.innerHTML = 'expand_more';
        // to close the more settings in border if open
        mainContainerForBorderStyles.style.visibility = 'hidden';
        mainContainerForBorderStyles.style.height = '0px';
        backgroundGradientContainer.style.visibility = 'visible';
        backgroundGradientContainer.style.height = '26px'; 
        // to close hover settings
        hoverSettingsContent.style.visibility = 'hidden';
        hoverSettingsContent.style.height = '0px';
        containerToDisabledHoverSettings.style.visibility = 'hidden';
        containerToDisabledHoverSettings.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.visibility = 'hidden';
        containerForHoverSolidBackgroundColor.style.height = '0px';
        containerForHoverSolidBackgroundColor.style.visibility = 'hidden';
        
    } else {
        btnContentBackground.style.height = '0px';
        btnContentBackground.style.visibility = 'hidden';
        iconBackground.innerHTML = 'expand_more';
        solidBackgroundColorContainer.style.visibility = 'hidden'; 
        solidBackgroundColorContainer.style.height = '0px'; 
        backgroundGradientContainer.style.visibility = 'hidden';
        backgroundGradientContainer.style.height = '0px'; 
        containerForSettings.style.height = '202px';
    }
});

// SOURCE CODE FOR SOLID BACKGROUND FOR BUTTON
const solidBackgroundColorContainer = document.querySelector('#container_solid_value');
const solidBackgroundColor = document.querySelector('#background_button_solid');
const containerForSolidBackground = document.querySelector('#container_solid_value');
const codeContainerForSolidBackground = document.querySelector('#child_container_solid_color');

solidBackgroundColor.addEventListener('click', () => {
    if (solidBackgroundColor.checked) {
        backgroundGradientContainer.style.visibility = 'hidden';
        containerForSolidBackground.style.height = '0px';
        containerForSolidBackground.style.visibility = 'visible';
        containerForSolidBackground.style.height = '26px';
        btnContentBackground.style.height = '80px';
        containerForSettings.style.height = '282px';
        codeContainerForSolidBackground.style.visibility = 'visible';
        codeContainerForSolidBackground.style.height = 13 + 'px';
        codeForSolidBackgroundColor.innerHTML = solidBackgroundColorOutput.value;
        btnOutput.style.backgroundColor = solidBackgroundColorOutput.value;
        btnOutput.style.backgroundImage = 'none';
        codeContainerForGradientContainer.style.visibility = 'hidden'
        codeContainerForGradientContainer.style.height = `${0}px`;
    } else {
        containerForSolidBackground.style.visibility = 'hidden';
        containerForSolidBackground.style.height = '0px';
    }
});

// SOURCE CODE FOR SOLID BACKGROUND COLOR 
const solidBackgroundColorValue = document.querySelector('#solid_background_value');
const solidBackgroundColorOutput = document.querySelector('#solid_background_output');
const codeForSolidBackgroundColor = document.querySelector('#code_for_solid_color');

solidBackgroundColorValue.addEventListener('input', () => {
    solidBackgroundColorOutput.value = solidBackgroundColorValue.value;
    codeForSolidBackgroundColor.innerHTML = solidBackgroundColorValue.value;
    btnOutput.style.backgroundColor = solidBackgroundColorValue.value;
});
solidBackgroundColorOutput.addEventListener('input', () => {
    solidBackgroundColorValue.value = solidBackgroundColorOutput.value;
    codeForSolidBackgroundColor.innerHTML = solidBackgroundColorOutput.value;
    btnOutput.style.backgroundColor = solidBackgroundColorOutput.value;
});

const backgroundGradient = document.querySelector('#background_button_gradient');
const backgroundSolidColor = document.querySelector('#background_button_solid');
const backgroundGradientContainer = document.querySelector('#background_gradient_value_container');
const codeContainerForGradientContainer = document.querySelector('#child_container_gradient_color');

backgroundGradient.addEventListener('click', gradientFunction);

function gradientFunction () {
    if (backgroundGradient.checked) {
        backgroundGradientContainer.style.visibility = 'visible';
        containerForSolidBackground.style.visibility = 'hidden';
        containerForSolidBackground.style.height = '0px';
        btnContentBackground.style.height = '120px';
        containerForSettings.style.height = '322px';
        btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${colorPickerForFirstColor.value}, ${colorPickerForSecondColor.value})`;
        btnOutput.style.backgroundColor = 'none';
        codeContainerForSolidBackground.style.visibility = 'hidden';
        codeContainerForSolidBackground.style.height = 0 + 'px';
        codeContainerForGradientContainer.style.visibility = 'visible'
        codeContainerForGradientContainer.style.height = `${90}px`;
    } else {
        backgroundGradientContainer.style.height = '0px';
        backgroundGradientContainer.style.visibility = 'hidden';
    }
};

const rangeValueForGradientDegree = document.querySelector('#range_value_for_gradient_color');
const outputValueForGradientDegree = document.querySelector('#output_value_for_gradient_degree_color');

const firstColorOutputForGradientColor = document.querySelector('#first_color_picker_output_value_for_gradient_color');
const colorPickerForFirstColor = document.querySelector('#first_color_picker_value_for_gradient_color');

const secondColorOutputForGradientColor = document.querySelector('#second_color_picker_output_for_gradient_color');
const colorPickerForSecondColor = document.querySelector('#second_color_picker_value_for_gradient_color');

const codeForGradientFirstColor = document.querySelectorAll('.code_for_gradient_first_color');
const codeForGradientSecondColor = document.querySelectorAll('.code_for_gradient_second_color');
const codeForGradientDegree = document.querySelectorAll('.code_for_gradient_degree');

rangeValueForGradientDegree.addEventListener('input', rangeValue);

function rangeValue () {
    for (let i = 0; i <= codeForGradientDegree.length; i++ ) {
        codeForGradientDegree[i].innerHTML = rangeValueForGradientDegree.value + 'deg';
        btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${colorPickerForFirstColor.value}, ${secondColorOutputForGradientColor.value})`;
        outputValueForGradientDegree.value = `${rangeValueForGradientDegree.value}`;
    }
};

outputValueForGradientDegree.addEventListener('input', () => {
    for (let i = 0; i <= codeForGradientDegree.length; i++) {
        codeForGradientDegree[i].innerHTML = outputValueForGradientDegree.value + 'deg';
        rangeValueForGradientDegree.value = `${outputValueForGradientDegree.value}`;
        btnOutput.style.backgroundImage = `linear-gradient(${outputValueForGradientDegree.value}deg, ${colorPickerForFirstColor.value}, ${secondColorOutputForGradientColor.value})`;
    }
});

colorPickerForFirstColor.addEventListener('input', () => {
    for (let i = 0; i < codeForGradientFirstColor.length; i++) {
        codeForGradientFirstColor[i].innerHTML = colorPickerForFirstColor.value;
        firstColorOutputForGradientColor.value = colorPickerForFirstColor.value;
        btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${colorPickerForFirstColor.value}, ${secondColorOutputForGradientColor.value})`;
    }
});
firstColorOutputForGradientColor.addEventListener('input', () => {
    for (let i = 0; i < codeForGradientFirstColor.length; i++) {
        codeForGradientFirstColor[i].innerHTML = firstColorOutputForGradientColor.value;
        colorPickerForFirstColor.value = firstColorOutputForGradientColor.value;
        btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${firstColorOutputForGradientColor.value}, ${secondColorOutputForGradientColor.value})`;
    }
});

colorPickerForSecondColor.addEventListener('input', () => {
    for (let i = 0; i <= codeForGradientSecondColor.length; i++) {
        codeForGradientSecondColor[i].innerHTML = colorPickerForSecondColor.value;
        secondColorOutputForGradientColor.value = colorPickerForSecondColor.value;
        btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${firstColorOutputForGradientColor.value}, ${secondColorOutputForGradientColor.value})`;
    }
});

secondColorOutputForGradientColor.addEventListener('input', () => {
    for (let i = 0; i <= codeForGradientSecondColor.length; i++) {
        codeForGradientSecondColor[i].innerHTML = secondColorOutputForGradientColor.value;
        colorPickerForSecondColor.value = secondColorOutputForGradientColor.value;
        btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${firstColorOutputForGradientColor.value}, ${secondColorOutputForGradientColor.value})`;
    }
});
// END FOR BACKGROUND SETTINGS

// HOVER SETTINGS
const hoverSettingsContainer = document.querySelector('#hover_settings');
const hoverSettingsContent = document.querySelector('#hover_settings_content');
const disablingCheckboxForHover = document.querySelector('#disabling_checkbox_for_hover');
const containerToDisabledHoverSettings = document.querySelector('#container_to_disabled_hover_color');

hoverSettingsContainer.addEventListener('click', () => {
    if(hoverSettingsContent.style.height == '0px') {
        hoverSettingsContent.style.visibility = 'visible';
        hoverSettingsContent.style.height = '120px';
        containerToDisabledHoverSettings.style.visibility = 'visible';
        containerForHoverGradientBackgroundColor.style.visibility = 'visible';
        containerForSettings.style.height = '322px';
        containerForSettings.style.borderBottom = '1px solid black';
        btnContentBackground.style.visibility = 'hidden';
        btnContentBackground.style.height = '0px';
        iconBackground.innerHTML = 'expand_more';
        // to close the text/font settings  
        fontTextSettings.style.visibility = 'hidden';
        fontTextSettings.style.height = '0px';
        textIcon.innerHTML = 'expand_more';
        // to close the Shadow settings  
        shadowSettingsContent.style.visibility = 'hidden';
        shadowSettingsContent.style.height = '0px';
        shadowIcon.innerHTML = 'expand_more';
        // to close the border styles
        btnDpBorderSettings.style.visibility = 'hidden';
        btnDpBorderSettings.style.height = '0px';
        iconBordr.innerHTML = 'expand_more';
        // to close the more settings in border if open
        mainContainerForBorderStyles.style.visibility = 'hidden';
        mainContainerForBorderStyles.style.height = '0px';
        backgroundGradientContainer.style.visibility = 'hidden';
        backgroundGradientContainer.style.height = '0px'; 
        // button background "solid and gradient color"
        solidBackgroundColorContainer.style.visibility = 'hidden'; 
        solidBackgroundColorContainer.style.height = '0px'; 
        backgroundGradientContainer.style.visibility = 'hidden';
        backgroundGradientContainer.style.height = '0px';
    } else {
        containerForSettings.style.height = '202px';
        hoverSettingsContent.style.visibility = 'hidden';
        hoverSettingsContent.style.height = '0px';
        containerToDisabledHoverSettings.style.visibility = 'hidden';
        containerToDisabledHoverSettings.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.height = '0px';
        containerForHoverGradientBackgroundColor.style.visibility = 'hidden';
        containerForHoverSolidBackgroundColor.style.height = '0px';
        containerForHoverSolidBackgroundColor.style.visibility = 'hidden';
        
    }
});

disablingCheckboxForHover.addEventListener('change', () => {
    if (disablingCheckboxForHover.checked) {
        containerToDisabledHoverSettings.style.opacity = 1;
        containerToDisabledHoverSettings.style.pointerEvents = 'fill' ;
        btnOutput.addEventListener('mouseenter', () => {
            btnOutput.style.background = `linear-gradient(${rangeDegreeForGradientBackgroundColorForHover.value}deg, ${colorPickerForFirstColorOfGradientBackgroundColorForHover.value}, ${colorPickerForSecondColorOfGradientBackgroundColorForHover.value})`;
        });
        codeContainerForHoverGradientBackgroundColor.style.visibility = 'visible';
        codeContainerForHoverGradientBackgroundColor.style.height = `${90}px`;
    } else {
        btnOutput.addEventListener('mouseenter', () => {
            btnOutput.style.backgroundColor = solidBackgroundColorOutput.value;
            btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${colorPickerForFirstColor.value}, ${secondColorOutputForGradientColor.value})`;
        });
        containerToDisabledHoverSettings.style.opacity = 0.7;
        containerToDisabledHoverSettings.style.pointerEvents = 'none' ;
        codeContainerForHoverGradientBackgroundColor.style.visibility = 'hidden';
        codeContainerForHoverGradientBackgroundColor.style.height = `${0}px`;
        codeContainerForHoverSolidBackgroundColor.style.visibility = 'hidden';
        codeContainerForHoverSolidBackgroundColor.style.height = `${0}px`;
    }
});

const radioForHoverBackgroundGradientColor = document.querySelector('#radio_for_hover_background_gradient_color');
const radioForHoverBackgroundSolidColor = document.querySelector('#radio_for_hover_background_solid_color');
const containerForHoverGradientBackgroundColor = document.querySelector('#container_of_hover_background_for_gradient_color');
const containerForHoverSolidBackgroundColor = document.querySelector('#container_hover_background_solid_color');
const codeContainerForHoverSolidBackgroundColor = document.querySelector('.child_container_solid_background_of_hover');
const codeContainerForHoverGradientBackgroundColor = document.querySelector('#child_container_gradient_color_of_hover');

radioForHoverBackgroundGradientColor.addEventListener('click', () => {
    if (radioForHoverBackgroundGradientColor.checked) {
        containerForHoverGradientBackgroundColor.style.visibility = 'visible';
        containerForHoverSolidBackgroundColor.style.visibility = 'hidden';
        containerForHoverSolidBackgroundColor.style.height = '0px';
        codeContainerForHoverSolidBackgroundColor.style.visibility = 'hidden';
        codeContainerForHoverSolidBackgroundColor.style.height = '0px';
        codeContainerForHoverGradientBackgroundColor.style.visibility = 'visible';
        codeContainerForHoverGradientBackgroundColor.style.height = `${90}px`;
        
        btnOutput.addEventListener('mouseenter', () => {
            btnOutput.style.background = `linear-gradient(${rangeDegreeForGradientBackgroundColorForHover.value}deg, ${colorPickerForFirstColorOfGradientBackgroundColorForHover.value}, ${colorPickerForSecondColorOfGradientBackgroundColorForHover.value})`;
        });
        btnOutput.addEventListener('mouseleave', () => {
            btnOutput.style.backgroundColor = solidBackgroundColorOutput.value;
            btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${colorPickerForFirstColor.value}, ${secondColorOutputForGradientColor.value})`;
        });
        btnOutput.removeEventListener('mouseenter', () => {
            btnOutput.style.background = colorPickerForSolidColorOfBackgroundColorForHover.value;
        });
    } else {
        containerForHoverGradientBackgroundColor.style.visibility = 'hidden';
    }
});

radioForHoverBackgroundSolidColor.addEventListener('click', () => {
    if (radioForHoverBackgroundSolidColor.checked) {
        containerForHoverSolidBackgroundColor.style.visibility = 'visible';
        containerForHoverGradientBackgroundColor.style.visibility = 'hidden';
        containerForHoverGradientBackgroundColor.style.height = '0px';
        codeContainerForHoverSolidBackgroundColor.style.visibility = 'visible';
        codeContainerForHoverSolidBackgroundColor.style.height = `${13}px`;
        codeContainerForHoverGradientBackgroundColor.style.visibility = 'hidden';
        codeContainerForHoverGradientBackgroundColor.style.height = `${0}px`;
        
        btnOutput.removeEventListener('mouseenter', () => {
            btnOutput.style.background = `linear-gradient(${rangeDegreeForGradientBackgroundColorForHover.value}deg, ${colorPickerForFirstColorOfGradientBackgroundColorForHover.value}, ${colorPickerForSecondColorOfGradientBackgroundColorForHover.value})`;
        });
        btnOutput.addEventListener('mouseleave', () => {
            btnOutput.style.backgroundColor = solidBackgroundColorOutput.value;
            btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${colorPickerForFirstColor.value}, ${secondColorOutputForGradientColor.value})`;
        });
        btnOutput.addEventListener('mouseenter', () => {
            btnOutput.style.background = colorPickerForSolidColorOfBackgroundColorForHover.value;
        });
        codeForHoverSolidDegree.innerHTML = colorPickerOutputForSolidColorOfBackgroundColorForHover.value;
    } else {
        containerForHoverSolidBackgroundColor.style.visibility = 'hidden';
    }
});

//gradient 
const colorPickerForFirstColorOfGradientBackgroundColorForHover = document.querySelector('#first_color_picker_for_hover_background_gradient_color');
const colorPickerOutputForFirstColorOfGradientBackgroundColorForHover = document.querySelector('#first_color_picker_output_for_hover_background_gradient_color');
const colorPickerForSecondColorOfGradientBackgroundColorForHover = document.querySelector('#second_color_picker_for_hover_background_gradient_color');
const colorPickerOutputForSecondColorOfGradientBackgroundColorForHover = document.querySelector('#second_color_picker_output_for_hover_background_gradient_color');
const rangeDegreeForOutputGradientBackgroundColorForHover = document.querySelector('#range_output_for_hover_background_gradient_degree');
const rangeDegreeForGradientBackgroundColorForHover = document.querySelector('#range_for_hover_background_gradient_degree');

const codeForHoverGradientFirstColor = document.querySelectorAll('.code_for_hover_gradient_first_color');
const codeForHoverGradientSecondColor = document.querySelectorAll('.code_for_hover_gradient_second_color');
const codeForHoverGradientDegree = document.querySelectorAll('.code_for_hover_gradient_degree');
colorPickerForFirstColorOfGradientBackgroundColorForHover.addEventListener('input', () => {
    for (i = 0; i <= codeForHoverGradientFirstColor.length; i++) {
        colorPickerOutputForFirstColorOfGradientBackgroundColorForHover.value = colorPickerForFirstColorOfGradientBackgroundColorForHover.value;
        codeForHoverGradientFirstColor[i].innerHTML = `${colorPickerOutputForFirstColorOfGradientBackgroundColorForHover.value}`;
    }
});
colorPickerOutputForFirstColorOfGradientBackgroundColorForHover.addEventListener('input', () => {
    for (i = 0; i <= codeForHoverGradientFirstColor.length; i++) {
        colorPickerForFirstColorOfGradientBackgroundColorForHover.value = colorPickerOutputForFirstColorOfGradientBackgroundColorForHover.value;
        codeForHoverGradientFirstColor[i].innerHTML = `${colorPickerOutputForFirstColorOfGradientBackgroundColorForHover.value}`;
        btnOutput.style.background = colorPickerOutputForFirstColorOfGradientBackgroundColorForHover.value;
    }
});

colorPickerForSecondColorOfGradientBackgroundColorForHover.addEventListener('input', () => {
    for (i = 0; i <= codeForHoverGradientSecondColor.length; i++) {
        codeForHoverGradientSecondColor[i].innerHTML = colorPickerForSecondColorOfGradientBackgroundColorForHover.value;
        codeForHoverGradientSecondColor.value = colorPickerForSecondColorOfGradientBackgroundColorForHover.value;
    } 
});
colorPickerOutputForSecondColorOfGradientBackgroundColorForHover.addEventListener('input', () => {
    for (i = 0; i <= codeForHoverGradientSecondColor.length; i++) { 
        codeForHoverGradientSecondColor[i].innerHTML = colorPickerOutputForFirstColorOfGradientBackgroundColorForHover.value;
        btnOutput.style.background = colorPickerOutputForFirstColorOfGradientBackgroundColorForHover.value;
        colorPickerForSecondColorOfGradientBackgroundColorForHover.value = colorPickerOutputForSecondColorOfGradientBackgroundColorForHover.value;
    }
});

rangeDegreeForGradientBackgroundColorForHover.addEventListener('input', () => {
    for (i = 0; i <= codeForHoverGradientDegree.length; i++) {
        codeForHoverGradientDegree[i].innerHTML = rangeDegreeForGradientBackgroundColorForHover.value;
        rangeDegreeForOutputGradientBackgroundColorForHover.value = rangeDegreeForGradientBackgroundColorForHover.value;
    } 
});
rangeDegreeForOutputGradientBackgroundColorForHover.addEventListener('input', () => {
    for (i = 0; i <= codeForHoverGradientDegree.length; i++) {
        codeForHoverGradientDegree[i].innerHTML = rangeDegreeForOutputGradientBackgroundColorForHover.value;
        rangeDegreeForGradientBackgroundColorForHover.value = rangeDegreeForOutputGradientBackgroundColorForHover.value;
        btnOutput.style.background = rangeDegreeForOutputGradientBackgroundColorForHover.value + 'deg';
    } 
});
btnOutput.addEventListener('mouseenter', () => {
    btnOutput.style.background = `linear-gradient(${rangeDegreeForGradientBackgroundColorForHover.value}deg, ${colorPickerForFirstColorOfGradientBackgroundColorForHover.value}, ${colorPickerForSecondColorOfGradientBackgroundColorForHover.value})`;
});
btnOutput.addEventListener('mouseleave', () => {
    btnOutput.style.backgroundColor = solidBackgroundColorOutput.value;
    btnOutput.style.backgroundImage = `linear-gradient(${rangeValueForGradientDegree.value}deg, ${colorPickerForFirstColor.value}, ${secondColorOutputForGradientColor.value})`;
});
// solid
const colorPickerOutputForSolidBackgroundForHover = document.querySelector('#solid_color_picker_output_for_hover_background_solid_color');
const colorPickerForSolidColorOfBackgroundColorForHover = document.querySelector('#solid_color_picker_for_hover_background_solid_color');
const codeForHoverSolidDegree = document.querySelector('.code_for_hover_solid_color');

colorPickerForSolidColorOfBackgroundColorForHover.addEventListener('input', () => {
    codeForHoverSolidDegree.innerHTML = colorPickerForSolidColorOfBackgroundColorForHover.value;
    colorPickerOutputForSolidColorOfBackgroundColorForHover.value = colorPickerForSolidColorOfBackgroundColorForHover.value;
});
colorPickerOutputForSolidBackgroundForHover.addEventListener('input', () => {
    codeForHoverSolidDegree.innerHTML = colorPickerOutputForSolidColorOfBackgroundColorForHover.value;
    colorPickerForSolidColorOfBackgroundColorForHover.value = colorPickerOutputForSolidColorOfBackgroundColorForHover.value;
});

// CLIPBOARD API

const copyButton = document.querySelector('#copy_button');

copyButton.addEventListener('click', codeCopy); 

async function codeCopy () {
    const divs = document.querySelectorAll('#parent_container_for_code ');
    let text = "";
    for (let i = 0; i < divs.length; i++) {
        if(divs[i].offsetHeight > 0) {
            text += divs[i].innerText + "\n";
        }
    }
    try {
        await navigator.clipboard.writeText(text);
        alert("code copied");
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}
