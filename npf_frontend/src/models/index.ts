export interface INavLink {
    route: string;
    label: string;
}

export interface IBubblePath {
    path: string;
    label: string;
    marginTop: number;
}

export interface IMessage {
    id: string;
    senderChat: boolean; 
    data: string;
    time: string;
    error: boolean;
    sessionUuid?: string;
}

export interface ISession {
    id: string;
    queries: IQuery[];
    responses: IResponses[];
    createdAt: string;
}

export interface IQuery {
    id: number;
    model: string;
    body: string;
    createdAt: string;
}

export interface IResponses {
    id: number;
    context: { [key: string]: string[] };
    body: string;
    createdAt: string;
}

export interface ILineData {
    labels: string[];
    data: number[];
}

export interface IUserData {
    user: IUserPersonalData[];
    acc: IAccUserId[];
}

export interface IUserPersonalData {
    user_id: string;
    gender: number;
    age: number;
}

export interface IAccUserId {
    npo_account_id: string;
    user_id: string;
}

/*
{
    "user": [
        {
            "user_id": 1,
            "gender": true,
            "age": 45
        }
    ],
        "acc": [
            {
                "npo_account_id": 22,
                "user_id": 1
            },
            {
                "npo_account_id": 24,
                "user_id": 1
            }
        ]
}
*/

export interface IAccountAllData {
    id: number;
    npo_account_id: string;
    year: number;
    quartal: string;
    pmnts_sum_per_qrtr: number;
    pmnts_sum_per_year: number;
}

/*
[
  {
    "id": 2,
    "npo_account_id": 22,
    "year": 2005,
    "quartal": 3,
    "pmnts_sum_per_qrtr": 15500,
    "pmnts_sum_per_year": 25500,
    "quarterly_forecast": null,
    "yearly_forecast": null
  },
  {
    "id": 1,
    "npo_account_id": 22,
    "year": 2003,
    "quartal": 1,
    "pmnts_sum_per_qrtr": 15000,
    "pmnts_sum_per_year": 25000,
    "quarterly_forecast": null,
    "yearly_forecast": null
  }
]
*/

export interface IOperationData {
    operation_0: number;
    operation_1: number;
}

/*
{
  "operation_0": 2,
  "operation_1": 2
}
*/

export interface IPredictData {
    npo_account_id: string;
    quarterly_forecast: number;
    yearly_forecast: number;
}