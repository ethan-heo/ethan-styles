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
    Number,
    Shadow,
    String,
    StrokeStyle,
    Transition,
    Typography,
} from 'generate-design-token';

type NormalizedToken = string | number | Record<string, any>;

export const normalizeColor = (token: Color): NormalizedToken => {
    return token.$value;
};

export const normalizeDimension = (token: Dimension): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    const { value, unit } = token.$value;

    return `${value}${unit}`;
};

export const normalizeFontFamily = (token: FontFamily): NormalizedToken => {
    const name = 'fontFamily';

    if (typeof token.$value === 'string') {
        return token.$value;
    }

    return token.$value.join(', ');
};

export const normalizeFontWeight = (token: FontWeight): NormalizedToken => {
    return token.$value;
};

export const normalizeDuration = (token: Duration): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    const { value, unit } = token.$value;

    return `${value}${unit}`;
};

export const normalizeCubicBezier = (token: CubicBezier): NormalizedToken => {
    const name = 'cubicBezier';

    if (typeof token.$value === 'string') {
        return token.$value;
    }

    return `cubic-bezier(${token.$value.join(', ')})`;
};

export const normalizeString = (token: String): NormalizedToken => {
    return token.$value;
};

export const normalizeNumber = (token: Number): NormalizedToken => {
    return token.$value;
};

export const normalizeComposite = (token: Composite): NormalizedToken => {
    // composite을 사용하는 케이스가 뭘까?
    // normalize의 목적은 스타일 속성으로 변환하는 것이 목표인데 composite은 용도의 범위에 벗어나 보인다.
    // 일단 값을 반환하게 만들어서 사용자가 핸들링 하도록 만든다.

    return token.$value;
};

export const normalizeStrokeStyle = (token: StrokeStyle): NormalizedToken => {
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

export const normalizeBorder = (token: Border): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    const result = {
        'border-width': '',
        'border-style': token.$value.style,
        'border-color': token.$value.color,
    };

    if (typeof token.$value.width === 'string') {
        result['border-width'] = token.$value.width;
    } else {
        result['border-width'] =
            `${token.$value.width.value}${token.$value.width.unit}`;
    }

    return result;
};

export const normalizeTransition = (token: Transition): NormalizedToken => {
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

export const normalizeShadow = (token: Shadow): NormalizedToken => {
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

export const normalizeGradient = (token: Gradient): NormalizedToken => {
    if (typeof token.$value === 'string') {
        return token.$value;
    }

    // Gradient 값 설정이 잘못됨 Array Like 여야 함.
    return '';
};

export const normalizeTypography = (token: Typography): NormalizedToken => {
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
