import React, { useState } from "react";
import { Col, Divider, Row } from "antd";
import { useTranslation } from "react-i18next";

const Shape: React.FC<{ children?: React.ReactNode; id: string; }> = (props) => (
  <div id={props.id}></div>
);

const LayoutStyle = () => {
  const [shapes, setShapes] = useState(["square", "circle", "oval", "trapezoid", "rectangle", "parallelogram"])
  const [offsetPosition, setOffsetPosition] = useState(0);

  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
  }

  const handleLeftMove = () => {
    setShapes(shapes.slice(1).concat(shapes[0]));
  }

  const handleChangePosition = () => {
    setOffsetPosition((offsetPosition) => offsetPosition == 0 ? 3 : 0);
  }

  const handleRightMove = () => {
    setShapes(shapes.slice(-1).concat(shapes.slice(0,5)));
  }

  const handleRandomMove = () => {
    const newArray: string[] = [];
    setShapes(newArray.concat(shapes).sort(() => Math.random() - 0.5));
  }

  const Controller: React.FC = () => {
    return (
      <Row gutter={16}>
        <Col span={6}>
          <button className="controller-button" onClick={handleLeftMove}>
            <Shape id="triangle-left"/>
            <label className="controller-label">{t("Move shape")}</label>
          </button>
        </Col>
        <Col span={12}>
          <button className="controller-button" onClick={handleChangePosition}>
            <Shape id="triangle-bottom"/>
            <Shape id="triangle-top"/>
            <label className="controller-label">{t("Move position")}</label>
          </button>
        </Col>
        <Col span={6}>
          <button className="controller-button" onClick={handleRightMove}>
            <Shape id="triangle-right"/>
            <label className="controller-label">{t("Move shape")}</label>
          </button>
        </Col>
      </Row>
    )
  }

  const ShapeView: React.FC = () => {
    const ShapeButton: React.ReactNode[] = [];

    shapes.forEach((value, i) => {
      ShapeButton.push(
        <Col key={i} span={6} offset={i==offsetPosition ? 6 : 0}>
          <button onClick={handleRandomMove}>
            <div id={value}/>
          </button>
        </Col>
      );
    });

    return (
      <Row className="upper-view" gutter={[16,16]} justify="center">
        {ShapeButton}
      </Row>
    )
  }

  return (
    <div>
      <select className="lang" onChange={onClickLanguageChange}>
        <option value="en">{t("EN")}</option>
        <option value="th">{t("TH")}</option>
      </select>
      <header>
        <h1 className="title">{t("Title")}</h1>
      </header>
      <div className="container">
        <Controller />
        <Divider />
        <ShapeView />
      </div>
    </div>
  )
}

export default LayoutStyle