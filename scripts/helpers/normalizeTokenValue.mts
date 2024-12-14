import {
    Border,
    Color,
    Composite,
    CubicBezier,
    Dimension,
    Duration,
    FontFamily,
    FontWeight,
    Gradient,
    isBorderToken,
    isColorToken,
    isCompositeToken,
    isCubicBezierToken,
    isDimensionToken,
    isDurationToken,
    isFontFamilyToken,
    isFontWeightToken,
    isGradientToken,
    isNumberToken,
    isShadowToken,
    isStringToken,
    isStrokeStyleToken,
    isTransitionToken,
    isTypographyToken,
    Number,
    Shadow,
    String,
    StrokeStyle,
    TokenObj,
    Transition,
    Typography,
} from 'generate-design-token';

type NormalizedToken = string | number | Record<string, any>;

const normalizeColor = (token: Color): NormalizedToken => {
    return token.$value;
};

const normalizeDimension = (token: Dimension): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    const { value, unit } = token.$value;

    return `${value}${unit}`;
};

const normalizeFontFamily = (token: FontFamily): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    return token.$value.join(', ');
};

const normalizeFontWeight = (token: FontWeight): NormalizedToken => {
    return token.$value;
};

const normalizeDuration = (token: Duration): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    const { value, unit } = token.$value;

    return `${value}${unit}`;
};

const normalizeCubicBezier = (token: CubicBezier): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    return `cubic-bezier(${token.$value.join(', ')})`;
};

const normalizeString = (token: String): NormalizedToken => {
    return token.$value;
};

const normalizeNumber = (token: Number): NormalizedToken => {
    return token.$value;
};

const normalizeComposite = (token: Composite): NormalizedToken => {
    // composite을 사용하는 케이스가 뭘까?
    // normalize의 목적은 스타일 속성으로 변환하는 것이 목표인데 composite은 용도의 범위에 벗어나 보인다.
    // 일단 값을 반환하게 만들어서 사용자가 핸들링 하도록 만든다.

    return token.$value;
};

const normalizeStrokeStyle = (token: StrokeStyle): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    return {
        'stroke-dasharray': token.$value.dashArray
            .map((value) => {
                if (typeof value === 'string') {
                    return value;
                }

                return `${value.value}${value.unit}`;
            })
            .join(', '),
        'stroke-linecap': token.$value.lineCap,
    };
};

const normalizeBorder = (token: Border): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    const { style, color } = token.$value;
    let width = '';

    if (typeof token.$value.width === 'string') {
        width = token.$value.width;
    } else {
        width = `${token.$value.width.value}${token.$value.width.unit}`;
    }

    return `${width} ${style} ${color}`;
};

const normalizeTransition = (token: Transition): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    const result = {
        'transition-duration': '',
        'transition-timing-function': '',
        'transition-delay': '',
    };

    if (typeof token.$value.duration === 'string') {
        result['transition-duration'] = token.$value.duration;
    } else {
        result['transition-duration'] =
            `${token.$value.duration.value}${token.$value.duration.unit}`;
    }

    if (typeof token.$value.delay === 'string') {
        result['transition-delay'] = token.$value.delay;
    } else {
        result['transition-delay'] =
            `${token.$value.delay.value}${token.$value.delay.unit}`;
    }

    if (typeof token.$value.timingFunction === 'string') {
        result['transition-timing-function'] = token.$value.timingFunction;
    } else {
        result['transition-timing-function'] =
            `cubic-bezier(${token.$value.timingFunction.join(', ')})`;
    }

    return result;
};

const normalizeShadow = (token: Shadow): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    let offsetX = '';
    let offsetY = '';
    let blur = '';
    let spread = '';
    const color = token.$value.color;

    if (typeof token.$value.offsetX === 'string') {
        offsetX = token.$value.offsetX;
    } else {
        offsetX = `${token.$value.offsetX.value}${token.$value.offsetX.unit}`;
    }

    if (typeof token.$value.offsetY === 'string') {
        offsetY = token.$value.offsetY;
    } else {
        offsetY = `${token.$value.offsetY.value}${token.$value.offsetY.unit}`;
    }

    if (typeof token.$value.blur === 'string') {
        blur = token.$value.blur;
    } else {
        blur = `${token.$value.blur.value}${token.$value.blur.unit}`;
    }

    if (typeof token.$value.spread === 'string') {
        spread = token.$value.spread;
    } else {
        spread = `${token.$value.spread.value}${token.$value.spread.unit}`;
    }

    return `${offsetX} ${offsetY} ${blur} ${spread} ${color}`;
};

const normalizeGradient = (token: Gradient): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    // Gradient 값 설정이 잘못됨 Array Like 여야 함.
    return '';
};

const normalizeTypography = (token: Typography): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    const result = {
        'font-family': '',
        'font-size': '',
        'letter-spacing': '',
        'font-weight': token.$value.fontWeight,
        'line-height': token.$value.lineHeight,
    };

    if (typeof token.$value.fontSize === 'string') {
        result['font-size'] = token.$value.fontSize;
    } else {
        result['font-size'] =
            `${token.$value.fontSize.value}${token.$value.fontSize.unit}`;
    }

    if (typeof token.$value.fontFamily === 'string') {
        result['font-family'] = token.$value.fontFamily;
    } else {
        result['font-family'] = token.$value.fontFamily.join(', ');
    }

    if (typeof token.$value.letterSpacing === 'string') {
        result['letter-spacing'] = token.$value.letterSpacing;
    } else {
        result['letter-spacing'] =
            `${token.$value.letterSpacing.value}${token.$value.letterSpacing.unit}`;
    }

    return result;
};

const normalizeTokenValue = (token: TokenObj) => {
    switch (true) {
        case isColorToken(token):
            return normalizeColor(token);
        case isDimensionToken(token):
            return normalizeDimension(token);
        case isFontFamilyToken(token):
            return normalizeFontFamily(token);
        case isFontWeightToken(token):
            return normalizeFontWeight(token);
        case isDurationToken(token):
            return normalizeDuration(token);
        case isCubicBezierToken(token):
            return normalizeCubicBezier(token);
        case isStringToken(token):
            return normalizeString(token);
        case isNumberToken(token):
            return normalizeNumber(token);
        case isCompositeToken(token):
            return normalizeComposite(token);
        case isStrokeStyleToken(token):
            return normalizeStrokeStyle(token);
        case isBorderToken(token):
            return normalizeBorder(token);
        case isTransitionToken(token):
            return normalizeTransition(token);
        case isShadowToken(token):
            return normalizeShadow(token);
        case isGradientToken(token):
            return normalizeGradient(token);
        case isTypographyToken(token):
            return normalizeTypography(token);
        default:
            throw new Error(`지원하지 않는 타입: ${token}`);
    }
};

export default normalizeTokenValue;
