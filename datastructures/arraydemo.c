#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct node
{
    int data;
    struct node *next;
} node;

node *createNode(int data);
void displayAll(node *sll);
void freeAll(node *sll);
node *appendNodeToLast(node *sll, int data);
node *addNodeAfterExistingNode(node *sll, int data, int newData);
node *addNodeBeforeExistingNode(node *sll, int data, int newData);
node *updateNode(node *sll, int data, int newData);
node *hasNode(node *sll, int data, int *isNodePresent);
node *deleteNode(node *sll, int data);
node *reverse(node *sll);

int main()
{

    //MENU
    int choice = 0;
    node *HEAD = NULL;

    do
    {
        printf("\n**MENU**\n");
        printf("1.Add New Node at Last\n");
        printf("2.Add New Node after some node\n");
        printf("3.Add New Node before some node\n");
        printf("4.Update Node\n");
        printf("5.Delete Node\n");
        printf("6.Display All\n");
        printf("7.Reverse\n");
        printf("8.Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        int data;
        int newData;
        switch (choice)
        {
        case 1:
            printf("Enter new node data: ");
            scanf("%d", &newData);
            HEAD = appendNodeToLast(HEAD, newData);
            break;
        case 2:
            printf("Enter existing node data: ");
            scanf("%d", &data);
            printf("Enter new node data: ");
            scanf("%d", &newData);
            HEAD = addNodeAfterExistingNode(HEAD, data, newData);
            break;
        case 3:
            printf("Enter existing node data: ");
            scanf("%d", &data);
            printf("Enter new node data: ");
            scanf("%d", &newData);
            HEAD = addNodeBeforeExistingNode(HEAD, data, newData);
            break;
        case 4:
            printf("Enter node data to update: ");
            scanf("%d", &data);
            printf("Enter new node data: ");
            scanf("%d", &newData);
            HEAD = updateNode(HEAD, data, newData);
            break;
        case 5:
            printf("Enter node data to delete: ");
            scanf("%d", &data);
            HEAD = deleteNode(HEAD, data);
            break;
        case 6:
            displayAll(HEAD);
            break;
        case 7:
            HEAD = reverse(HEAD);
            displayAll(HEAD);
            break;
        case 8:
            printf("Exiting...");
            break;
        default:
            printf("\nEnter valid choice again!");
            break;
        }
    } while (choice != 8);

    freeAll(HEAD);
    return 0;
}

node *updateNode(node *HEAD, int data, int newData)
{
    int isNodePresent = 0;
    node *trav = hasNode(HEAD, data, &isNodePresent);
    if (isNodePresent)
    {
        trav->data = newData;
    }
    return HEAD;
}

node *deleteNode(node *HEAD, int data)
{
    // find if data node exists
    bool isFound = false;
    node *trav = HEAD;
    node *prev = HEAD;
    while (trav != NULL)
    {
        if (data == trav->data)
        {
            isFound = true;
            break;
        }
        prev = trav;
        trav = trav->next;
    }
    if (isFound)
    {
        // delete HEAD and reassgin new HEAD
        if (trav == HEAD)
        {
            HEAD = HEAD->next;
            trav->next = NULL;
        }
        else
        {
            prev->next = trav->next;
            trav->next = NULL;
        }
        free(trav);
    }
    return HEAD;
}

node *appendNodeToLast(node *HEAD, int data)
{
    node *newNode = createNode(data);
    node *trav = HEAD;
    if (trav == NULL)
    {
        HEAD = newNode;
        return HEAD;
    }
    // Traverse till last node
    while (trav->next != NULL)
    {
        trav = trav->next;
    }
    // Append newNode to last
    trav->next = newNode;
    return HEAD;
}

node *hasNode(node *HEAD, int data, int *isNodePresent)
{
    // find if data node exists
    *isNodePresent = 0;
    node *trav = HEAD;
    while (trav != NULL)
    {
        if (data == trav->data)
        {
            *isNodePresent = 1;
            break;
        }
        trav = trav->next;
    }
    if (!*isNodePresent)
    {
        // If does not exist
        // return head node and *isNodePresent as 1
        return HEAD;
    }
    // If exist
    // return data node and *isNodePresent as 0
    return trav;
}

node *addNodeAfterExistingNode(node *HEAD, int data, int newData)
{
    int isNodePresent = 0;
    node *trav = hasNode(HEAD, data, &isNodePresent);
    // trav contains the data after which new Node to be added
    // if present add newNode after given data node
    if (isNodePresent)
    {
        node *newNode = createNode(newData);
        newNode->next = trav->next;
        trav->next = newNode;
    }
    return HEAD;
}

node *addNodeBeforeExistingNode(node *HEAD, int data, int newData)
{
    // find if data node exists
    bool isFound = false;
    node *trav = HEAD;
    node *prev = HEAD;
    while (trav != NULL)
    {
        if (data == trav->data)
        {
            isFound = true;
            break;
        }
        prev = trav;
        trav = trav->next;
    }
    if (!isFound)
    {
        return HEAD;
    }
    // trav contains the data before which new Node to be added
    // prev contains the data after which new Node to be added
    // if present add newNode before given data node
    node *newNode = createNode(newData);

    // if node is HEAD node
    if (trav == prev)
    {
        newNode->next = prev;
        HEAD = newNode;
    }
    else
    {
        newNode->next = prev->next;
        prev->next = newNode;
    }
    return HEAD;
}

node *createNode(int data)
{
    node *sll = (node *)malloc(sizeof(node));
    sll->data = data;
    sll->next = NULL;
    return sll;
}

void displayAll(node *HEAD)
{
    node *trav = HEAD;
    while (trav != NULL)
    {
        if (trav->next == NULL)
        {
            printf("%d", trav->data);
        }
        else
        {
            printf("%d->", trav->data);
        }
        trav = trav->next;
    }
}

void freeAll(node *HEAD)
{
    node *trav = HEAD;
    while (trav != NULL)
    {
        node *temp = trav;
        trav = trav->next;
        free(temp);
    }
}

node *reverse(node *sll)
{
    // reverse linked list
    node *head = sll;
    // prev -> curr -> travnext
    node *prev = sll;
    node *curr = sll;
    node *travnext = sll;
    while (curr != NULL)
    {
        if (prev == head)
        {
            curr = curr->next;
            prev->next = NULL;
            travnext = curr->next;
            curr->next = prev;
        }
        else
        {
            travnext = curr->next;
            curr->next = prev;
        }
        // increment prev and travnext
        prev = curr;
        curr = travnext;
    }
    return prev;
}