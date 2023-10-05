import React from "react";
import axios from 'axios';
import { Container, ListGroup, Row, Col, Image, Button } from "react-bootstrap";

export function RecipeList({recipes, updateRecipes}){

    return (
        recipes.map((recipe, i) => {
            return <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.instructions} picture={recipe.picture} description={recipe.description} updateRecipes={updateRecipes}/>
        })
    )
};

function Recipe ( {name, ingredients, instructions, picture, description, updateRecipes} ){

    const removeRecipe = async (recipeName) => {
        const response = await axios.post("/api/removeRecipe", {
            name: recipeName
        });
        const recipes = response.data;
        updateRecipes(recipes);
    }

    return(
        <Container className="container border border-secondary rounded my-2 w-50">
            <Row xs="auto" className="my-2">
                <Col >
                    <Image src={picture} height={200} width={250} thumbnail/>
                </Col>
            </Row>
            <Row xs="auto" className="my-2">
                <Col>
                    <h3>{name}</h3>
                </Col>
            </Row>
            <Row xs="auto" className="my-2">
                <Col>
                    <h4>{description}</h4>
                </Col>
            </Row>
            <Row xs="auto" className="my-2">
                <Col>
                    <h5>Ingredients: </h5>
                    <ListGroup>
                        {ingredients.map((ingredient,i) => (
                            <ListGroup.Item key={"ingredient" + i}>{ingredient}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <Row xs="auto" className="my-2">
                <Col>
                    <h5>Instructions: </h5>
                    <ListGroup>
                        {instructions.map((instruction,i) => (
                            <ListGroup.Item key={"instruction" + i}>{instruction}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <Row xs="auto" className="my-2">
                <Col>
                    <Button onClick={() => removeRecipe(name)}>Remove</Button>
                </Col>
            </Row>
        </Container> 
    )
};

