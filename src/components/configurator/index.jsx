import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as S from "./styled";
import { backgroundStressColor, fontMainColor, boxMainProps } from "../app/styled";
import { CreateHeading } from "../create-heading";

const ConfiguratorContainer = ({ products }) => {
  const listCakes = products.map((item) => {
    const { name } = item;
    return <option>{name}</option>;
  });

  return (
    <S.Configurator>
      <ConfForm listCakes={listCakes} />
    </S.Configurator>
  );
};

const mapStateToProps = ({ productsList: { products } }) => {
  return { products };
};

export const Configurator = connect(mapStateToProps)(ConfiguratorContainer);

const RenderSelect = ({ controlId, label, value, onChange, defaultOpt, restOpt, mutedText }) => {
  return (
    <Form.Group controlId={controlId} style={{ marginBottom: "2rem" }}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        custom
        value={value}
        onChange={onChange}
        style={{ border: "0", borderBottom: `${boxMainProps}`, borderTop: `${boxMainProps}`, color: `${fontMainColor}`, fontSize: "0.9rem" }}
      >
        <option>{defaultOpt}</option>
        {restOpt}

      </Form.Control>
      <Form.Text style={{ color: `${fontMainColor}`, opacity: "0.7", fontSize: "0.9rem" }}>
        {mutedText}
      </Form.Text>
    </Form.Group>
  );
};

class ConfForm extends Component {
  state = {
    cake: "",
    quantityKg: "",
    quantityCakes: "",
    strawberry: false,
    blueberry: false,
    cherry: false,
    balloons: false,
    flatFig: false,
    lettering: "",
    getPhoto: false,
  };

  handleChangeSelect = (event) => {
    const name = event.target.id;
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeCheckboxes = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    this.setState({ [name]: checked });
  };

  handleChangeText = (event) => {
    const { value } = event.target;
    if (value.split("").length <= 30) {
      this.setState({ lettering: value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = JSON.stringify(this.state);
    console.log(formData);
    this.setState({
      cake: "",
      quantityKg: "",
      quantityCakes: "",
      strawberry: false,
      blueberry: false,
      cherry: false,
      balloons: false,
      flatFig: false,
      lettering: "",
      getPhoto: false,
    });
  };

  render() {
    const { listCakes } = this.props;

    const {
      cake,
      quantityKg,
      quantityCakes,
      strawberry,
      blueberry,
      cherry,
      balloons,
      flatFig,
      lettering,
      getPhoto,
    } = this.state;

    const listKg = [1.5, 2, 3, 4].map((item) => <option>{item}</option>);
    const listCount = [1, 2, 3, 4].map((item) => <option>{item}</option>);

    return (
      <>

        <CreateHeading h="h2" text="КОНФИГУРАТОР ЗАКАЗА" />

        <Form onSubmit={this.handleSubmit}>

          <RenderSelect
            controlId="cake"
            label="Выберите торт из списка"
            value={cake}
            onChange={this.handleChangeSelect}
            defaultOpt="Выберите торт из списка"
            restOpt={listCakes}
            mutedText="Вы можете вернуться к фотографиям тортов на главной странице"
          />

          <RenderSelect
            controlId="quantityKg"
            label="Количество килограмм"
            value={quantityKg}
            onChange={this.handleChangeSelect}
            defaultOpt="Количество килограмм"
            restOpt={listKg}
            mutedText="Да, есть технические ограничения по количеству килограмм. Однако, Вы всегда можете заказать капкейки или же несколько тортов."
          />

          <RenderSelect
            controlId="quantityCakes"
            label="Количество тортов"
            value={quantityCakes}
            onChange={this.handleChangeSelect}
            defaultOpt="Количество тортов"
            restOpt={listCount}
            mutedText="Да, есть технические ограничения по количеству тортов на один заказ."
          />

          <Form.Group controlId="decoration">
            <Form.Label>
              Вы можете заказать дополнительный декор к торту
            </Form.Label>

            <Row>
              <Col sm={4}>
                <Form.Group controlId="berries">
                  <Form.Label>Ягоды:</Form.Label>
                  <Col>
                    <Form.Check
                      type="checkbox"
                      label="Клубника"
                      name="strawberry"
                      id="strawberry"
                      checked={strawberry}
                      onChange={this.handleChangeCheckboxes}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Голубика"
                      name="blueberry"
                      id="blueberry"
                      checked={blueberry}
                      onChange={this.handleChangeCheckboxes}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Вишня"
                      name="cherry"
                      id="cherry"
                      checked={cherry}
                      onChange={this.handleChangeCheckboxes}
                    />
                  </Col>
                </Form.Group>
              </Col>

              <Col sm={4}>
                <Form.Group controlId="tempChocolate">
                  <Form.Label>Темперированный шоколад:</Form.Label>
                  <Col>
                    <Form.Check
                      type="checkbox"
                      label="Шарики"
                      name="balloons"
                      id="balloons"
                      checked={balloons}
                      onChange={this.handleChangeCheckboxes}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Плоские фигурки"
                      name="flatFig"
                      id="flatFig"
                      checked={flatFig}
                      onChange={this.handleChangeCheckboxes}
                    />
                  </Col>
                </Form.Group>
              </Col>

              <Col sm={4}>
                <Form.Group controlId="lettering">
                  <Form.Label>Надпись на торте:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ограничение 30 символов"
                    value={lettering}
                    onChange={this.handleChangeText}
                    style={{ border: "0", borderBottom: `${boxMainProps}`, borderTop: `${boxMainProps}`, color: `${fontMainColor}`, fontSize: "0.9rem" }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="getPhoto">
            <Form.Label>Получить фото торта на память</Form.Label>
            <Form.Check
              type="checkbox"
              label="Получить"
              name="getPhoto"
              id="getPhoto"
              checked={getPhoto}
              onChange={this.handleChangeCheckboxes}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ display: "block", margin: "0 auto", backgroundColor: `${backgroundStressColor}` }}>
            ЗАКАЗАТЬ
          </Button>
        </Form>
      </>
    );
  }
}
