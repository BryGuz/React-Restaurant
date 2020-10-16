import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
function RenderDish({dish}){
    return(
    <div className="col-12 col-md-5 mt-1">
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle heading>{dish.name}</CardTitle> 
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>
    );
}
function RenderComments({comments}){
    return(
    <div className="col-12 col-md-5 mt-1">
        <h2>Comments</h2>
        {comments.map((comment) => (
            <div key={comment.id}>
                <h5>{comment.comment}
                <h5>--{comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</h5><br/>
                </h5>
            </div>
        ))}   
    </div>
    );
} 
const DishDetail = (props) => {
    if(props.dish === undefined){
        return <div></div>
    }else{
      
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments} />
                </div> 
            </div>
                
        );
    }   
}


export default DishDetail;