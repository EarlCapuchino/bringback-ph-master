import React, { useState } from 'react';
import styles from '../styles/QrDesign.module.css';
import { QRCodeSVG } from 'qrcode.react';
import { ChromePicker } from 'react-color';

const QrDesign = ({ url, logo }) => {
    const [frame, setFrame] = useState('frame-1');
    const [frameText, setFrameText] = useState('Scan Me');
    const [frameColor, setFrameColor] = useState('#1429BA');
    const [patternColor, setPatternColor] = useState('#000000');
    const [patternBgColor, setPatternBgColor] = useState('#ffffff');
    const [textError, setTextError] = useState(null);


    const handleFrameChange = (e) => {
        setFrame(e.target.value);
    };

    const handleFrameTextChange = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= 30) {
            setFrameText(inputText);
            setTextError(null)
        } else {
           setTextError('Maximum 30 characters allowed')
        }

    };

    const handleFrameColorChange = (color) => {
        setFrameColor(color.hex);
    };

    const handlePatternColorChange = (color) => {
        setPatternColor(color.hex);
    };

    const handlePatternBgColorChange = (color) => {
        setPatternBgColor(color.hex);
    };

    return (
        <div className={styles.qrDesignContainer}>
            <p className={styles.previewUrl}>{url}</p>
            <div className={styles.contentWrapper}>
                <div className={styles.qrPreview}>
                    <div
                        className={styles.frame}
                        style={{
                            border: frame !== 'no-frame' ? `5px solid ${frameColor}` : 'none',
                            borderRadius: frame === 'frame-1' ? '10px' : frame === 'frame-2' ? '20px' : '0px',
                        }}
                    >
                        <QRCodeSVG
                            value={url}
                            size={300}
                            level="H"
                            bgColor={patternBgColor}
                            fgColor={patternColor}
                            imageSettings={{
                                src: logo,
                                x: null,
                                y: null,
                                height: 100,
                                width: 100,
                                excavate: true,
                            }}
                            renderAs="svg"
                            ecLevel="H"
                            eyeColor={{
                                topRight: patternColor,
                                topLeft: patternColor,
                                bottomLeft: patternColor,
                            }}
                        />
                        {frame !== 'no-frame' && (
                            <p style={{ color: frameColor }} className={styles.frameText}>
                                {frameText}
                            </p>

                        )}
                    </div>
                </div>
                <div className={styles.qrOptions}>
                    <h3 className={styles.groupTitle}>Frame Options</h3>
                    <div className={styles.optionGroup}>
                        <label className={styles.formLabel}>Style</label>
                        <select value={frame} onChange={handleFrameChange} className={styles.formInput}>
                            <option value="no-frame">No Frame</option>
                            <option value="frame-1">Frame 1</option>
                            <option value="frame-2">Frame 2</option>
                        </select>
                    </div>
                    {frame !== 'no-frame' && (
                        <>
                            <div className={styles.optionGroup}>
                                <label className={styles.formLabel}>Text</label>
                                <input
                                    type="text"
                                    value={frameText}
                                    onChange={handleFrameTextChange}
                                    className={styles.formInput}
                                />
                                 {textError && <p className={styles.errorText}>{textError}</p>}
                            </div>
                            <div className={styles.optionGroup}>
                                <label className={styles.formLabel}>Color</label>
                                <ChromePicker color={frameColor} onChange={handleFrameColorChange} />
                            </div>
                        </>
                    )}

                    <h3 className={styles.groupTitle}>Color Options</h3>
                    <div className={styles.optionGroup}>
                        <label className={styles.formLabel}>Pattern Color</label>
                        <ChromePicker color={patternColor} onChange={handlePatternColorChange} />
                    </div>
                    <div className={styles.optionGroup}>
                        <label className={styles.formLabel}>Background Color</label>
                        <ChromePicker color={patternBgColor} onChange={handlePatternBgColorChange} />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default QrDesign;